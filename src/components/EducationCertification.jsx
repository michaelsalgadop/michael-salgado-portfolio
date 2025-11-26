import { FaAward } from "react-icons/fa6";
import { TitleSection } from "./Helpers/TitleSection";
import { useTranslation } from "react-i18next";

export const EducationCertification = () => {
  const { t } = useTranslation();
  return (
    <section>
      <TitleSection Icon={FaAward} text={t("education")} id="education" />
      
    </section>
  );
};
