import PropTypes from "prop-types";
export const ProjectCard = ({ children }) => {
  return (
    <figure className="group relative overflow-hidden rounded-xl block h-[400px]">
      {children}
    </figure>
  );
};
ProjectCard.propTypes = {
  children: PropTypes.node.isRequired,
};
