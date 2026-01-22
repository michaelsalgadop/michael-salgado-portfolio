import { FaGlobe } from "react-icons/fa6";
import { AboutDropdown } from "../../AboutDropdown";
import { Language } from "./Language";
import { useTranslation } from "react-i18next";

export const Languages = ({ openMenu, setOpenMenu }) => {
  const { t } = useTranslation();
  return (
    <AboutDropdown
      id="languages"
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      buttonProps={{
        textBtn: t("languages"),
        Icon: FaGlobe,
        classIcon: "mr-1 size-6",
      }}
    >
      <Language languageText={t("lang-es")} level="C2" />
      <Language languageText={t("lang-ca")} level="C2" />
      <Language languageText={t("lang-en")} level="B1" />
    </AboutDropdown>
  );
};
