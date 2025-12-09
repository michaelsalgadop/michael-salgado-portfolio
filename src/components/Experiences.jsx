import { experiences } from "../data/data";
import { Card } from "./Card";
export const Experiences = () => {
  return (
    <section id="experience">
      <h3 className="text-center text-[45px] md:text-6xl font-bold tracking-tight mb-6">
        Experiencia profesional
      </h3>
      <div className="grid grid-cols-12 gap-4">
        {experiences &&
          experiences.map(
            ({ date1, work: center, text, date2, position, stack }, index) => (
              <Card
                key={index}
                date1={date1}
                center={center}
                text={text}
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
