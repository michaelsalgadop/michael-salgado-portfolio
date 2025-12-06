import { useContext } from "react";
import { Menu } from "../Navigator/Desktop/Menu";
import { Hamburguer } from "../Navigator/Mobile/Hamburguer";
import { MobileMenu } from "../Navigator/Mobile/MobileMenu";
import { useTranslation } from "react-i18next";
import { Language } from "../Navigator/Language";
import { NavbarContext } from "../../context/NavbarContext";

export const Header = () => {
  const { openNavbar } = useContext(NavbarContext);
  const { t } = useTranslation();
  return (
    <header className="py-4 px-4 sticky top-0 z-50 bg-gray-900">
      <nav>
        <div className="mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Desktop Menu */}
            <Menu />
            {/* Mobile Button */}
            <Hamburguer />
            <div className="flex items-center xl:ml-3">
              <Language />
              <button
                type="button"
                className="btn text-white transition-colors border-2 border-white hover:bg-white hover:text-gray-900 rounded-2xl text-sm md:text-lg"
              >
                {t("download-cv")}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {openNavbar && <MobileMenu />}
      </nav>
    </header>
  );
};
