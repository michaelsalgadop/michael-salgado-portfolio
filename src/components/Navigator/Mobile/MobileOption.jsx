import { useNavigate } from "../../../hooks/useNavigate";

export const MobileOption = (props) => {
  const { url, text, setOpen } = props;
  const { scrollTo } = useNavigate();
  const handleNavigation = () => {
    setOpen(false);
    scrollTo(url, 1500);
  };
  return (
    <li>
      <a
        onClick={handleNavigation}
        className="block text-lg text-white text-center"
      >
        {text}
      </a>
    </li>
  );
};
