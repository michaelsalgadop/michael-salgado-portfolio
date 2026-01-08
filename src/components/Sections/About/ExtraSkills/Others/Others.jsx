import { FaEllipsis } from "react-icons/fa6";
import { AboutDropdown } from "../../AboutDropdown";
import { Hability } from "./Hability";

export const Others = ({ openMenu, setOpenMenu }) => {
  return (
    <AboutDropdown
      id="others"
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      collapseDropdown
      buttonProps={{
        textBtn: "Otros",
        Icon: FaEllipsis,
        classIcon: "mr-1 size-6 p-1 bg-white text-gray-900 rounded-full",
      }}
    >
      <Hability text="Incorporación immediata" />
      <Hability text="Disponibilidad horária completa" />
      <Hability text="Permiso de conducir B1" />
    </AboutDropdown>
  );
};
