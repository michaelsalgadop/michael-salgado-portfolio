import React, { useContext } from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { NavbarContext } from "../../context/NavbarContext";

export const Option = React.memo(({ url, text, isMobile, Icon }) => {
  const { scrollTo } = useNavigate();
  const navbarContext = useContext(NavbarContext);

  const handleClick = () => {
    if (isMobile) {
      navbarContext.setOpenNavbar(false);
    }
    scrollTo(url, 1500, isMobile ? -120 : -80); // -80 es offset opcional
  };

  return (
    <li>
      <a onClick={handleClick} className="text-lg text-white cursor-pointer">
        <Icon className="mr-2" /> {text}
      </a>
    </li>
  );
});
