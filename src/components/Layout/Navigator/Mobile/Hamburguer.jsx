import { useContext } from "react";
import { NavbarContext } from "../../../../context/NavbarContext";

export const Hamburguer = () => {
  const { openNavbar, setOpenNavbar } = useContext(NavbarContext);
  return (
    <button
      onClick={() => setOpenNavbar(!openNavbar)}
      className="relative w-10 h-10 flex justify-center items-center cursor-pointer mr-2"
    >
      {/* Línea superior */}
      <span
        className={`hamburger-line absolute block w-8 h-[3px] bg-white rounded 
          ${openNavbar ? "rotate-45" : "-translate-y-2"}
        `}
      ></span>

      {/* Línea del medio */}
      <span
        className={`hamburger-line absolute block w-8 h-[3px] bg-white rounded 
          ${openNavbar ? "opacity-0" : ""}
        `}
      ></span>

      {/* Línea inferior */}
      <span
        className={`hamburger-line absolute block w-8 h-[3px] bg-white rounded 
          ${openNavbar ? "-rotate-45" : "translate-y-2"}
        `}
      ></span>
    </button>
  );
};
