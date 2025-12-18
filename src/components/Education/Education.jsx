import { educations } from "../../data/educations";
import { Card } from "../Card";

export const Education = () => {
  return (
    <>
      <h3 className="title-section">
        Mi<span className="text-tertiary ml-2">Formación</span>
      </h3>
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
