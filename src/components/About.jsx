import { FaPerson } from "react-icons/fa6";

import { TitleSection } from "./Helpers/TitleSection";
import { useState } from "react";
import { Owner } from "./About/Owner";
import { PersonalBrand } from "./About/PersonalBrand";
import { AboutText } from "./About/AboutText";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handlePersonalBrand = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <section>
      <TitleSection Icon={FaPerson} text={t("about")} id="about" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-4 mt-4 md:mt-0 flex justify-center relative">
          <Owner handlePersonalBrand={handlePersonalBrand} open={open} />
          <PersonalBrand open={open} />
        </div>
        <div className="col-span-12 md:col-span-8 mt-2 md:mt-6">
          <AboutText />
        </div>
      </div>
    </section>
  );
};
