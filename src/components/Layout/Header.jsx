import { useContext } from "react";
import { Menu } from "./Navigator/Desktop/Menu";
import { Hamburguer } from "./Navigator/Mobile/Hamburguer";
import { MobileMenu } from "./Navigator/Mobile/MobileMenu";
import { Language } from "./Navigator/Language";
import { NavbarContext } from "../../context/NavbarContext";
import { BtnCV } from "../BtnCV";
import { Logo } from "../Logo";

export const Header = () => {
  const { openNavbar, headerRef } = useContext(NavbarContext);
  return (
    <header className="py-4 px-4 sticky top-0 z-50 bg-gray-900" ref={headerRef}>
      <nav>
        <div className="mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden xl:block">
              <Logo />
            </div>
            {/* Desktop Menu */}
            <Menu />
            <div className="flex items-center justify-center xl:hidden">
              {/* Mobile Button */}
              <Hamburguer />
              <Logo />
            </div>
            <div className="flex items-center xl:ml-3">
              <Language />
              <BtnCV />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {openNavbar && <MobileMenu />}
      </nav>
    </header>
  );
};
