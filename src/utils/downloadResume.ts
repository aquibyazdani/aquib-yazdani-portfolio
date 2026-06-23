export const downloadResumeAsPDF = async () => {
  const link = document.createElement("a");
  link.href = "/Md_Aquib_Yazdani.pdf";
  link.download = "Md_Aquib_Yazdani.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
