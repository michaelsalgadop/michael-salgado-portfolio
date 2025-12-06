import { ImgOwner } from "./About/ImgOwner";
import { TextAbout } from "./About/TextAbout";

export const About = () => {
  return (
    <section id="about" className="grid grid-cols-12 gap-4 bg-gray-900">
      <div className="hidden lg:block lg:col-span-4">
        <ImgOwner />
      </div>
      <div className="col-span-12 lg:col-span-7">
        <TextAbout />
      </div>
    </section>
  );
};
