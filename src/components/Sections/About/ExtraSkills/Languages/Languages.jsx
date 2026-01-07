import { FaGlobe } from "react-icons/fa6";
import { AboutDropdown } from "../../AboutDropdown";
import { Language } from "./Language";

export const Languages = ({ openMenu, setOpenMenu }) => {
  return (
    <AboutDropdown
      id="languages"
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      buttonProps={{
        textBtn: "Idiomas",
        Icon: FaGlobe,
        classIcon: "mr-1 size-6",
      }}
    >
      <Language languageText="Español" level="C2" />
      <Language languageText="Catalán" level="C2" />
      <Language languageText="Inglés" level="B1" />
    </AboutDropdown>
  );
};
