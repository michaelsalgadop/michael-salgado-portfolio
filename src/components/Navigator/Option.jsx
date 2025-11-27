import { useNavigate } from "../../hooks/useNavigate";

export const Option = (props) => {
  const { url, text } = props;
  const { scrollTo } = useNavigate();
  return (
    <li>
      <a
        onClick={() => scrollTo(url, 1500, -80)}
        className="text-lg text-white xl:text-[25px]"
      >
        {text}
      </a>
    </li>
  );
};
