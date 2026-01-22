import PropTypes from "prop-types";
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
Project.propTypes = {
  name: PropTypes.string.isRequired,
  date1: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string), // array de strings no requerida(puede ser null)
  url: PropTypes.string.isRequired,
};
