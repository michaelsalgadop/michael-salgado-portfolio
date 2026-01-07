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
