import PropTypes from "prop-types";
export const UiLink = (props) => {
  const { urlLink, children, classLink, isTargetBlank = false } = props;
  return (
    <a
      href={urlLink}
      className={classLink}
      {...(isTargetBlank
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
};
UiLink.propTypes = {
  urlLink: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classLink: PropTypes.string,
  isTargetBlank: PropTypes.bool,
};
UiLink.defaultProps = {
  classLink: "",
};
