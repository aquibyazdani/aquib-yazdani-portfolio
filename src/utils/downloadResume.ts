import { personalInfo } from "../config/portfolio";

// Shared helpers
const gamma = (v: number) =>
  v > 0.0031308 ? 1.055 * v ** (1 / 2.4) - 0.055 : 12.92 * v;

const toHex = (v: number) =>
  Math.max(0, Math.min(255, Math.round(v * 255))).toString(16).padStart(2, "0");

const alphaHex = (a: number) =>
  a < 1 ? Math.round(a * 255).toString(16).padStart(2, "0") : "";

function parseAlpha(val: string | undefined, isPct: boolean): number {
  if (val === undefined) return 1;
  const n = parseFloat(val);
  return isPct ? n / 100 : n;
}

// oklab(L a b [/ alpha]) → #rrggbb[aa]
function oklabToHex(str: string): string {
  const m = str.match(
    /oklab\(\s*([\d.]+)(%?)\s+([-\d.none]+)(%?)\s+([-\d.none]+)(%?)(?:\s*\/\s*([\d.]+)(%?))?\s*\)/
  );
  if (!m) return "transparent";
  let l = parseFloat(m[1]);
  if (m[2] === "%") l /= 100;
  const a = m[3] === "none" ? 0 : parseFloat(m[3]) * (m[4] === "%" ? 0.004 : 1);
  const b = m[5] === "none" ? 0 : parseFloat(m[5]) * (m[6] === "%" ? 0.004 : 1);
  const alpha = parseAlpha(m[7], m[8] === "%");

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const lc = l_ ** 3, mc = m_ ** 3, sc = s_ ** 3;

  let r = 4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc;
  let g = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc;
  let bv = -0.004196086 * lc - 0.7034186147 * mc + 1.707614701 * sc;

  return `#${toHex(gamma(r))}${toHex(gamma(g))}${toHex(gamma(bv))}${alphaHex(alpha)}`;
}

// oklch(L C H [/ alpha]) → delegates to oklabToHex
function oklchToHex(str: string): string {
  const m = str.match(
    /oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.none]+)(?:\s*\/\s*([\d.]+)(%?))?\s*\)/
  );
  if (!m) return "transparent";
  let l = parseFloat(m[1]);
  if (m[2] === "%") l /= 100;
  const c = parseFloat(m[3]);
  const h = m[4] === "none" ? 0 : parseFloat(m[4]);
  const hRad = (h * Math.PI) / 180;
  const alpha = m[5] ? ` / ${m[5]}${m[6] ?? ""}` : "";
  return oklabToHex(`oklab(${l} ${c * Math.cos(hRad)} ${c * Math.sin(hRad)}${alpha})`);
}

// CIE lab(L a b [/ alpha]) → #rrggbb[aa]  (D65 white point)
function labToHex(str: string): string {
  const m = str.match(
    /\blab\(\s*([\d.]+)(%?)\s+([-\d.none]+)(%?)\s+([-\d.none]+)(%?)(?:\s*\/\s*([\d.]+)(%?))?\s*\)/
  );
  if (!m) return "transparent";
  let L = parseFloat(m[1]);
  if (m[2] === "%") L = L; // L is already 0-100
  const a = m[3] === "none" ? 0 : parseFloat(m[3]);
  const b = m[5] === "none" ? 0 : parseFloat(m[5]);
  const alpha = parseAlpha(m[7], m[8] === "%");

  // Lab → XYZ (D65)
  const fy = (L + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;
  const delta = 6 / 29;
  const f = (t: number) => (t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29));
  const X = 0.95047 * f(fx);
  const Y = 1.0 * f(fy);
  const Z = 1.08883 * f(fz);

  // XYZ → linear sRGB
  let r = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
  let g = -0.9692660 * X + 1.8760108 * Y + 0.0415560 * Z;
  let bv = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;

  return `#${toHex(gamma(r))}${toHex(gamma(g))}${toHex(gamma(bv))}${alphaHex(alpha)}`;
}

// CIE lch(L C H [/ alpha]) → delegates to labToHex
function lchToHex(str: string): string {
  const m = str.match(
    /\blch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.none]+)(?:\s*\/\s*([\d.]+)(%?))?\s*\)/
  );
  if (!m) return "transparent";
  const L = parseFloat(m[1]);
  const C = parseFloat(m[3]);
  const H = m[4] === "none" ? 0 : parseFloat(m[4]);
  const hRad = (H * Math.PI) / 180;
  const alpha = m[5] ? ` / ${m[5]}${m[6] ?? ""}` : "";
  return labToHex(`lab(${L} ${C * Math.cos(hRad)} ${C * Math.sin(hRad)}${alpha})`);
}

function patchModernColorsInClone(clonedDoc: Document) {
  const overrides: string[] = [];

  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      Array.from(sheet.cssRules).forEach((rule) => {
        const text = rule.cssText;
        if (
          text.includes("oklch") ||
          text.includes("oklab") ||
          text.includes("lab(") ||
          text.includes("lch(")
        ) {
          overrides.push(
            text
              .replace(/oklch\([^)]+\)/g, (m) => oklchToHex(m))
              .replace(/oklab\([^)]+\)/g, (m) => oklabToHex(m))
              .replace(/\blch\([^)]+\)/g, (m) => lchToHex(m))
              .replace(/\blab\([^)]+\)/g, (m) => labToHex(m))
          );
        }
      });
    } catch {
      // cross-origin stylesheets — skip
    }
  });

  if (overrides.length > 0) {
    const style = clonedDoc.createElement("style");
    style.textContent = overrides.join("\n");
    clonedDoc.head.appendChild(style);
  }
}

export const downloadResumeAsPDF = async () => {
  const element = document.getElementById("resume-card");
  if (!element) return;

  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#1a1a1a",
    logging: false,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
    onclone: (clonedDoc: Document) => {
      patchModernColorsInClone(clonedDoc);
    },
  });

  const imgData = canvas.toDataURL("image/png");
  const pdfWidth = 210;
  const pdfHeight = 297;
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const imgWidthMm = pdfWidth;
  const imgHeightMm = (canvas.height * pdfWidth) / canvas.width;
  let heightLeft = imgHeightMm;
  let pageTop = 0;
  pdf.addImage(imgData, "PNG", 0, pageTop, imgWidthMm, imgHeightMm);
  heightLeft -= pdfHeight;
  while (heightLeft > 0) {
    pageTop -= pdfHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, pageTop, imgWidthMm, imgHeightMm);
    heightLeft -= pdfHeight;
  }
  pdf.save(`${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`);
};
