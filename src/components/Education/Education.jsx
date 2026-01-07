import { educations } from "../../data/educations";
import { Card } from "../Card";
import { TitleSection } from "../UI/TitleSection";

export const Education = () => {
  return (
    <>
      <TitleSection
        classTitle="title-section"
        titleWithoutHighlighting="Mi"
        titleHighlighting="Formación"
      />
      <div className="grid grid-cols-12 gap-4">
        {educations &&
          educations.map(({ date1, education, date2, ubication }, index) => (
            <Card
              key={index}
              date1={date1}
              education={education}
              ubication={ubication}
              date2={date2}
            />
          ))}
      </div>
    </>
  );
};
