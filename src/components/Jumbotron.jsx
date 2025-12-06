import { ImageJumbotron } from "./Jumbotron/ImageJumbotron";
import { TitlePage } from "./Jumbotron/TitlePage";
export const Jumbotron = () => {
  return (
    <section
      className="relative grid grid-cols-12 gap-4 bg-gray-900 min-h-150"
      id="home"
    >
      <div className="flex items-center col-span-12 lg:col-span-7 mb-5">
        <TitlePage />
      </div>
      <div className="flex justify-center items-center col-span-12 lg:col-span-5">
        <ImageJumbotron />
      </div>
    </section>
  );
};
