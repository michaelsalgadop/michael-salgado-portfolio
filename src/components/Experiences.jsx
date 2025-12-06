import { experiences } from "../data/data";
import { Experience } from "./Experience/Experience";
export const Experiences = () => {
  return (
    <section id="experience">
      <h3 className="text-center text-[45px] md:text-6xl font-bold tracking-tight mb-4">
        Experiencia
      </h3>
      <div className="grid grid-cols-12 gap-4">
        {experiences &&
          experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
      </div>
    </section>
  );
};
