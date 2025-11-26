import { useState } from "react";
import { Menu } from "../Navigator/Desktop/Menu";
import { Hamburguer } from "../Navigator/Mobile/Hamburguer";
import { MobileMenu } from "../Navigator/Mobile/MobileMenu";
import { useTranslation } from "react-i18next";
import { Language } from "../Navigator/Language";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="py-2 sticky top-0 z-50 bg-origin-padding bg-left-top bg-repeat bg-auto border-b-transparent backdrop-blur-xl bg-scroll bg-clip-border bg-transparent *:bg-none">
      <nav className="mx-6">
        <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-center gap-4">
            {/* Desktop Menu */}
            <Menu />
            {/* Mobile Button */}
            <Hamburguer setOpen={setOpen} open={open} />
            <div className="flex items-center lg:ml-3">
              <Language />
              <button
                type="button"
                className="btn bg-gemini-gradient text-white transform btn-transition hover:btn-transition animate-gradient rounded-2xl text-lg xl:text-[25px]"
              >
                {t("download-cv")}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && <MobileMenu setOpen={setOpen} />}
      </nav>
    </header>
  );
};
