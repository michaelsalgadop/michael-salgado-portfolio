import { useTranslation } from "react-i18next";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="web-proyects">
      <h3 className="title-section">
        {t("plural-mine-male")}
        <span className="text-tertiary ml-2">{t("web-proyects")}</span>
      </h3>
      <a href="https://rentari.netlify.app/" target="_blank">
        <p>Rentari 2025</p>
        <p>
          Web de renting de vehículos pensada tanto para empresas como para
          particulares, diseñada con el objetivo de ofrecer una experiencia
          moderna, segura y fácil de utilizar.
        </p>
        <img src="/projects/rentari.png" alt="Imagen de la web de Rentari" />
      </a>
    </section>
  );
};
