import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export const AboutSkillButton = (props) => {
  const { textBtn, Icon, classIcon, state, handlerToogle } = props;

  return (
    <button
      className="flex items-center bg-secondary border border-tertiary p-4 rounded-md cursor-pointer"
      onClick={handlerToogle}
    >
      <Icon className={classIcon} />
      {textBtn}
      {state ? (
        <FaAngleUp className="ml-1" />
      ) : (
        <FaAngleDown className="ml-1" />
      )}
    </button>
  );
};
