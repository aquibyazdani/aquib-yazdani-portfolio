import type { ReactNode } from "react";

// Minimal formatting for CMS text fields (legal pages): blank-line paragraphs,
// "- " bullets, **bold**, [label](https://url) and {placeholder} tokens.

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function renderInline(text: string, keyPrefix = ""): ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    const key = `${keyPrefix}${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <span key={key} className="text-white font-semibold">{part.slice(2, -2)}</span>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={key}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-[#d3e97a] hover:text-white transition-colors underline underline-offset-2"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

export function applyTokens(text: string, tokens: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (m, key: string) => (key in tokens ? tokens[key] : m));
}

export function RichText({ text, tokens = {}, className = "" }: { text: string; tokens?: Record<string, string>; className?: string }) {
  const blocks = applyTokens(text, tokens).split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="space-y-2">
              {lines.map((l, n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="text-[#d3e97a] mt-1 flex-shrink-0">•</span>
                  <span>{renderInline(l.trim().slice(2), `${i}-${n}-`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(lines.join(" "), `${i}-`)}</p>;
      })}
    </div>
  );
}
