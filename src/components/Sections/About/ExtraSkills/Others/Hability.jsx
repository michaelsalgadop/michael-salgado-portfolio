import { FaCheck } from "react-icons/fa6";

export const Hability = ({ text }) => {
  return (
    <li className="flex items-center">
      <FaCheck className="mr-2 text-tertiary" />
      {text}
    </li>
  );
};
