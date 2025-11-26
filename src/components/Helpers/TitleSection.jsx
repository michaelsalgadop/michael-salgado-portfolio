export const TitleSection = (props) => {
  const { text, Icon, id } = props;
  return (
    <h3
      className="text-3xl md:text-4xl lg:text-[50px] text-center flex justify-center items-center font-bold"
      id={id}
    >
      <Icon className="mr-2 text-blue-600" />
      {text}
    </h3>
  );
};
