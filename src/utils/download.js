const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/cv.pdf";
  link.download = "tosin_resume.pdf";
  link.click();
};

export default handleDownload;
