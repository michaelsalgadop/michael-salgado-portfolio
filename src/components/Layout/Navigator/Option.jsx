import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "../../../hooks/useNavigate";
import { NavbarContext } from "../../../context/NavbarContext";

export const Option = React.memo(({ url, text, isMobile, Icon }) => {
  const { scrollTo } = useNavigate();
  const { setOpenNavbar, headerRef, activeLink } = useContext(NavbarContext);

  const handleClick = () => {
    if (isMobile) setOpenNavbar(false);
    /**
     * headerRef.current.offsetHeight es la altura de nuestro header,
     * está actuando de offset, es decir, de referencia para restar y saber
     * a que altura nos situaremos en la sección que cliquemos. Por ejemplo, para que el navbar
     * no tape el titulo de la sección.
     */
    scrollTo(url, 1500, -headerRef.current.offsetHeight);
  };

  return (
    <li>
      <a
        onClick={handleClick}
        className={`flex items-center text-lg cursor-pointer ${
          activeLink === url ? "text-white" : "text-gray-400"
        }`}
      >
        <Icon className="mr-2" /> {text}
      </a>
    </li>
  );
});
Option.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
