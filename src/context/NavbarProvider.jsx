import { NavbarContext } from "./NavbarContext";
import { useMemo, useRef, useState } from "react";
import {
  FaBook,
  FaBriefcase,
  FaCertificate,
  FaGlobe,
  FaHouse,
  FaPerson,
} from "react-icons/fa6";
export function NavbarProvider({ children }) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const headerRef = useRef();
  const sections = useMemo(
    () => [
      { name: "home", icon: FaHouse },
      { name: "about", icon: FaPerson },
      { name: "experience", icon: FaBriefcase },
      { name: "web-proyects", icon: FaGlobe },
      { name: "education", icon: FaBook },
    ],
    []
  );
  return (
    <NavbarContext.Provider
      value={{
        openNavbar,
        openLanguage,
        activeLink,
        sections,
        headerRef,
        setOpenNavbar,
        setOpenLanguage,
        setActiveLink,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
