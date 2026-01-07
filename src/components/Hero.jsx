import { ImageHero } from "./Hero/ImageHero";
import { TitlePage } from "./Hero/TitlePage";
export const Hero = () => {
  return (
    <section className="relative grid grid-cols-12 gap-4 min-h-150" id="home">
      <div className="flex items-center col-span-12 lg:col-span-7 mb-5">
        <TitlePage />
      </div>
      <div className="flex justify-center lg:justify-end items-center col-span-12 lg:col-span-5">
        <ImageHero />
      </div>
    </section>
  );
};
