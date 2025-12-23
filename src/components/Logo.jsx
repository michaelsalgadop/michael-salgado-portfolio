import { useContext, useState } from "react";
import { useNavigate } from "../hooks/useNavigate";
import { NavbarContext } from "../context/NavbarContext";
export const Logo = () => {
  const { scrollTo } = useNavigate();
  const { setOpenNavbar, headerRef } = useContext(NavbarContext);
  const [loaded, setLoaded] = useState(false);

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
        onLoad={() => setLoaded(true)}
        className={`h-10 md:h-12 w-auto object-cover transition-opacity duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  );
};
