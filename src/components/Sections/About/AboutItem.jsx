import PropTypes from "prop-types";
export const AboutItem = (props) => {
  const { title, text, classTitle, classText } = props;
  return (
    <li>
      <h4 className={classTitle}>{title}</h4>
      <p className={classText}>{text}</p>
    </li>
  );
};
AboutItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classTitle: PropTypes.string,
  classText: PropTypes.string,
};
AboutItem.defaultProps = {
  classTitle: "",
  classText: "",
};
