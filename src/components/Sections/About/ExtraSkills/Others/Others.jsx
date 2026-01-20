import { FaEllipsis } from "react-icons/fa6";
import { AboutDropdown } from "../../AboutDropdown";
import { Hability } from "./Hability";
import { useTranslation } from "react-i18next";

export const Others = ({ openMenu, setOpenMenu }) => {
  const { t } = useTranslation();
  return (
    <AboutDropdown
      id="others"
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      collapseDropdown
      buttonProps={{
        textBtn: t("others"),
        Icon: FaEllipsis,
        classIcon: "mr-1 size-6 p-1 bg-white text-gray-900 rounded-full",
      }}
    >
      <Hability text={t("about-section.inmediate-availability")} />
      <Hability text={t("about-section.full-time-availability")} />
      <Hability text={t("about-section.driving-licence")} />
    </AboutDropdown>
  );
};
