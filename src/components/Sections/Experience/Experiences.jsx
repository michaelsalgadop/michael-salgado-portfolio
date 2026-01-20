import { useTranslation } from "react-i18next";
import { experiences } from "../../../data/experiences";
import { Card } from "../../UI/Card/Card";
import { TitleSection } from "../../UI/TitleSection";
export const Experiences = () => {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <TitleSection
        classTitle="title-section"
        titleWithoutHighlighting={t("mine")}
        titleHighlighting={t("experience")}
      />
      <div className="grid grid-cols-12 gap-4">
        {experiences &&
          experiences.map(
            ({ date1, work: center, text, date2, position, stack }, index) => (
              <Card
                key={index}
                date1={date1}
                center={center}
                text={t(text)}
                date2={date2}
                position={position}
                stack={stack}
              />
            )
          )}
      </div>
    </section>
  );
};
