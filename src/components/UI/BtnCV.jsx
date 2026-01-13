import { useTranslation } from "react-i18next";

export const BtnCV = () => {
  const { t } = useTranslation();
  /**
   *  Método para descargar un archivo, en este caso el CV.
   * @param {Element} e Elemento que es el boton que en este caso lo preventDefaulteamos
   */
  const downloadCV = (e) => {
    e.preventDefault();
    const pdfUrl = "CV_Salgado_Perez_Michael.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Salgado_Perez_Michael.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      type="button"
      className="btn text-white transition-colors border-2 border-white hover:bg-white hover:text-gray-900 rounded-2xl text-[11px] sm:text-md md:text-lg"
      onClick={downloadCV}
    >
      {t("download-cv")}
    </button>
  );
};
