import { useContext } from "react";
import { useNavigate } from "../hooks/useNavigate";
import { NavbarContext } from "../context/NavbarContext";
export const Logo = () => {
  const { scrollTo } = useNavigate();
  const { setOpenNavbar, headerRef } = useContext(NavbarContext);
  const handleClick = () => {
    setOpenNavbar(false);
    scrollTo("home", 1500, -headerRef.current.offsetHeight);
  };
  return (
    <a
      onClick={handleClick}
      className={`flex items-center text-lg cursor-pointer`}
    >
      <img
        src="./logo.png"
        alt="Logo de la web"
        title="logo"
        className="h-10 md:h-12 w-auto object-cover"
      />
    </a>
  );
};
