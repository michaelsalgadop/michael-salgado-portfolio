import { useTranslation } from "react-i18next";
import { Option } from "./Option";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <ul className="space-x-8">
      <Option text={t("about")} url="about" />
      <Option text={t("education")} url="education" />
      <Option text={t("experience")} url="experience" />
      <Option text={t("web-proyects")} url="web-proyects" />
    </ul>
  );
};
