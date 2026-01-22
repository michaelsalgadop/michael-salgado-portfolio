import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import PropTypes from "prop-types";
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
AboutSkillButton.propTypes = {
  textBtn: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  classIcon: PropTypes.string,
  state: PropTypes.bool.isRequired,
  handlerToogle: PropTypes.func.isRequired,
};
AboutSkillButton.defaultProps = {
  classIcon: "",
};
