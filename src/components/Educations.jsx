import { educations } from "../data/data";
import { Card } from "./Card";
export const Educations = () => {
  return (
    <section id="education">
      <h3 className="text-center text-[45px] md:text-6xl font-bold tracking-tight mb-6">
        Formación académica
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
    </section>
  );
};
