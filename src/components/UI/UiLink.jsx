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
