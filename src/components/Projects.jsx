import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { Project } from "./Project/Project";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="web-proyects">
      <h3 className="title-section">
        {t("plural-mine-male")}
        <span className="text-tertiary ml-2">{t("web-proyects")}</span>
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map(
          ({ nameProject, date1, text, img, stack, url }, index) => (
            <div key={index} className="w-full md:w-[45%] lg:w-1/3 max-w-6xl">
              <Project
                name={nameProject}
                date1={date1}
                text={text}
                img={img}
                stack={stack}
                url={url}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
