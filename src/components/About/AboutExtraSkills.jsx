import { FaCheck, FaEllipsis, FaGlobe } from "react-icons/fa6";
import { AboutSkillButton } from "./AboutSkillButton";
import { useState } from "react";

export const AboutExtraSkills = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleLanguages = (e) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === "languages" ? null : "languages"));
  };

  const toggleOthers = (e) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === "others" ? null : "others"));
  };
  return (
    <div className="flex gap-2 py-2">
      <div className="relative">
        <AboutSkillButton
          textBtn="Idiomas"
          Icon={FaGlobe}
          classIcon="mr-1 size-6"
          state={openMenu === "languages"}
          handlerToogle={toggleLanguages}
        />
        <div
          data-state={openMenu === "languages" ? "open" : "closed"}
          className="absolute top-[65px] z-2 min-w-[250px] md:min-w-[300px] bg-secondary border border-tertiary p-4 rounded-md transition transition-discrete data-[state=closed]:scale-0 data-[state=closed]:transform data-[state=closed]:opacity-0 data-[state=open]:duration-100 data-[state=open]:ease-out data-[state=closed]:duration-75 data-[state=closed]:ease-in"
        >
          <ul className="space-y-4">
            <li>
              <span className="inline-block mb-0.5">Español</span>
              <div className="h-8 width-[100%] rounded-[5px] bg-gray-900">
                <div className="w-full h-full bg-tertiary flex items-center transition-all duration-250 ease-linear rounded-[5px]">
                  <span className="ml-2.5 font-bold color-white">Nativo</span>
                </div>
              </div>
            </li>
            <li>
              <span className="inline-block mb-0.5">Català</span>
              <div className="h-8 width-[100%] rounded-[5px] bg-gray-900">
                <div className="w-full h-full bg-tertiary flex items-center transition-all duration-250 ease-linear rounded-[5px]">
                  <span className="ml-2.5 font-bold color-white">Nativo</span>
                </div>
              </div>
            </li>
            <li>
              <span className="inline-block mb-0.5">English</span>
              <div className="h-8 width-[100%] rounded-[5px] bg-gray-900">
                <div className="w-[75%] h-full bg-tertiary flex items-center transition-all duration-250 ease-linear rounded-[5px]">
                  <span className="ml-2.5 font-bold color-white">
                    Profesional
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <AboutSkillButton
          textBtn="Otros"
          Icon={FaEllipsis}
          classIcon="mr-1 size-6 p-1 bg-white text-gray-900 rounded-full"
          state={openMenu === "others"}
          handlerToogle={toggleOthers}
        />
        <div
          data-state={openMenu === "others" ? "open" : "closed"}
          className="absolute top-[65px] z-2 min-w-[250px] md:min-w-[300px] bg-secondary border border-tertiary p-4 rounded-md transition transition-discrete data-[state=closed]:scale-0 data-[state=closed]:transform data-[state=closed]:opacity-0 data-[state=open]:duration-100 data-[state=open]:ease-out data-[state=closed]:duration-75 data-[state=closed]:ease-in right-0 md:left-0"
        >
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheck className="mr-2 text-tertiary" />
              Incorporación immediata
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 text-tertiary" />
              Disponibilidad horária completa
            </li>
            <li className="flex items-center">
              <FaCheck className="mr-2 text-tertiary" />
              Permiso de conducir B1
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
