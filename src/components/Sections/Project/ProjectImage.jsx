import { useTranslation } from "react-i18next";

export const ProjectImage = ({ name, img }) => {
  const { t } = useTranslation();
  return (
    <img
      src={img}
      alt={`${t("img-web")} ${name}`}
      title={`${t("img-web")} ${name}`}
      className="w-full h-full object-cover object-[50%_30%] scale-110 opacity-0 lg:opacity-100 lg:scale-100 border-0 block lg:group-hover:scale-110 lg:group-hover:opacity-0 transition-all duration-450 ease-in-out"
    />
  );
};
