import PropTypes from "prop-types";
export const Tecnology = ({ text, classes }) => {
  return <li className={classes}>{text}</li>;
};
Tecnology.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};
Tecnology.defaultProps = {
  classes: "",
};
