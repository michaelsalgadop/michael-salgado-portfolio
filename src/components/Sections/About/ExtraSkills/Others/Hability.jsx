import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";
export const Hability = ({ text }) => {
  return (
    <li className="flex items-center">
      <FaCheck className="mr-2 text-tertiary" />
      {text}
    </li>
  );
};
Hability.propTypes = {
  text: PropTypes.string.isRequired,
};
