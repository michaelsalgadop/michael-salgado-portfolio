import { AboutExtraSkills } from "./AboutExtraSkills";
import { ImgOwner } from "./ImgOwner";
import { TextAbout } from "./TextAbout";

export const About = () => {
  return (
    <section id="about" className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
        <ImgOwner />
        <AboutExtraSkills />
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
        <TextAbout />
      </div>
    </section>
  );
};
