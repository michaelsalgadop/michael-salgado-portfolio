import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Tecnologies } from "../../UI/Card/Tecnologies";

export const ProjectContent = ({ name, date1, text, stack, url }) => {
  const { t } = useTranslation();
  return (
    <figcaption className="w-full p-4 absolute top-0 left-0 size-full visible opacity-100 lg:invisible lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-450 ease-in-out flex items-center justify-center flex-col z-1 space-y-2">
      <h4 className="tracking-tight font-bold text-[20px]">
        {name} {date1}
      </h4>
      <p className="text-center">{t(text)}</p>
      <a className="btn bg-tertiary rounded-xl" href={url} target="_blank">
        {t("projects-section.visit")}
      </a>
      {stack?.length > 0 && (
        <Tecnologies
          stack={stack}
          classesItems="absolute bottom-5 flex gap-1 flex-wrap justify-center p-1"
          classesPerItem="p-1 text-gray-400"
        />
      )}
    </figcaption>
  );
};
ProjectContent.propTypes = {
  name: PropTypes.string.isRequired,
  date1: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string), // array de strings no requerida(puede ser null)
  url: PropTypes.string.isRequired,
};
