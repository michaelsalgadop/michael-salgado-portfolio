import { useTranslation } from "react-i18next";
import { certifications } from "../../data/certifications";
import { Card } from "../Card";
import { TitleSection } from "../UI/TitleSection";

export const Certifications = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleSection
        classTitle="title-section"
        titleWithoutHighlighting={t("plural-mine")}
        titleHighlighting={t("certification")}
      />
      <div className="flex justify-center gap-4">
        {certifications &&
          certifications.map(
            ({ date1, education, concepts, ubication }, index) => (
              <Card
                key={index}
                date1={date1}
                education={education}
                ubication={ubication}
                concepts={concepts}
              />
            )
          )}
      </div>
    </>
  );
};
