import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { Project } from "./Project/Project";
import { TitleSection } from "./UI/TitleSection";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="web-proyects">
      <TitleSection
        classTitle="title-section"
        titleWithoutHighlighting={t("plural-mine-male")}
        titleHighlighting={t("web-proyects")}
      />
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
