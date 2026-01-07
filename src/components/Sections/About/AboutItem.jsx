export const AboutItem = (props) => {
  const { title, text, classTitle, classText } = props;
  return (
    <li>
      <h4 className={classTitle}>{title}</h4>
      <p className={classText}>{text}</p>
    </li>
  );
};
