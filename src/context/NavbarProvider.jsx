import { NavbarContext } from "./NavbarContext";
import { useMemo, useState } from "react";
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
  const sections = useMemo(
    () => [
      { name: "home", icon: FaHouse },
      { name: "about", icon: FaPerson },
      { name: "education", icon: FaBook },
      { name: "certification", icon: FaCertificate },
      { name: "experience", icon: FaBriefcase },
      { name: "web-proyects", icon: FaGlobe },
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
        setOpenNavbar,
        setOpenLanguage,
        setActiveLink,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
