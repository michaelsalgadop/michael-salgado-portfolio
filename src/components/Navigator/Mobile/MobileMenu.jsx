import { useTranslation } from "react-i18next";
import { MobileOption } from "./MobileOption";

export const MobileMenu = (props) => {
  const { setOpen } = props;
  const { t } = useTranslation();
  return (
    <ul className="mt-2 lg:hidden px-4 pb-4 space-y-3">
      <MobileOption url="about" text={t("about")} setOpen={setOpen} />
      <MobileOption url="education" text={t("education")} setOpen={setOpen} />
      <MobileOption url="experience" text={t("experience")} setOpen={setOpen} />
      <MobileOption
        url="web-proyects"
        text={t("web-proyects")}
        setOpen={setOpen}
      />
    </ul>
  );
};
