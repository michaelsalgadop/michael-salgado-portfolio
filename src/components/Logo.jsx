import { useContext } from "react";
import { useNavigate } from "../hooks/useNavigate";
import { NavbarContext } from "../context/NavbarContext";
export const Logo = ({
  isLogoSmall = true,
  loadedLogo = true,
  setLoadedLogo = null,
}) => {
  const { scrollTo } = useNavigate();
  const { setOpenNavbar, headerRef } = useContext(NavbarContext);

  const handleClick = () => {
    setOpenNavbar(false);
    scrollTo("home", 1500, -headerRef.current.offsetHeight);
  };
  return (
    <a onClick={handleClick} className="cursor-pointer">
      <img
        src="./logo.png"
        alt="Logo de la web"
        title="logo"
        onLoad={() => {
          if (setLoadedLogo) setLoadedLogo(true);
        }}
        className={`logo-web ${isLogoSmall ? "logo-small" : "logo-big"} ${
          loadedLogo ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  );
};
