import { useTranslation } from "react-i18next";
import { certifications } from "../../data/certifications";
import { Card } from "../Card";

export const Certifications = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="title-section">
        {t("plural-mine")}
        <span className="text-tertiary ml-2">{t("certification")}</span>
      </h3>
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
