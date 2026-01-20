import { useTranslation } from "react-i18next";
import { educations } from "../../../data/educations";
import { Card } from "../../UI/Card/Card";
import { TitleSection } from "../../UI/TitleSection";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleSection
        classTitle="title-section"
        titleWithoutHighlighting={t("mine")}
        titleHighlighting={t("education")}
      />
      <div className="grid grid-cols-12 gap-4">
        {educations &&
          educations.map(({ date1, education, date2, ubication }, index) => (
            <Card
              key={index}
              date1={date1}
              education={t(education)}
              ubication={ubication}
              date2={date2}
            />
          ))}
      </div>
    </>
  );
};
