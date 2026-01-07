import { ProjectCard } from "./ProjectCard";
import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";
import { ProjectOverlay } from "./ProjectOverlay";

export const Project = ({ name, date1, text, img, stack, url }) => {
  return (
    <ProjectCard>
      <ProjectImage img={img} name={name} />
      <ProjectContent
        name={name}
        date1={date1}
        text={text}
        stack={stack}
        url={url}
      />
      <ProjectOverlay />
    </ProjectCard>
  );
};
