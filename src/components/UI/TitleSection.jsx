import PropTypes from "prop-types";
export const TitleSection = ({
  classTitle,
  titleWithoutHighlighting,
  titleHighlighting,
}) => {
  return (
    <h3 className={classTitle}>
      {titleWithoutHighlighting}
      <span className="text-tertiary ml-2">{titleHighlighting}</span>
    </h3>
  );
};
TitleSection.propTypes = {
  classTitle: PropTypes.string,
  titleWithoutHighlighting: PropTypes.string.isRequired,
  titleHighlighting: PropTypes.string.isRequired,
};
TitleSection.defaultProps = {
  classTitle: "",
};
