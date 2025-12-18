import { experiences } from "../data/experiences";
import { Card } from "./Card";
export const Experiences = () => {
  return (
    <section id="experience">
      <h3 className="title-section">
        Mi<span className="text-tertiary ml-2">Experiencia</span>
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
