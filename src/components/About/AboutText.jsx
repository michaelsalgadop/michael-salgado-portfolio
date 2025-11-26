import { useTranslation } from "react-i18next";
import { FaQuoteLeft } from "react-icons/fa6";

export const AboutText = () => {
  const { t } = useTranslation();
  return (
    <div className="relative border-dashed border-2 border-blue-600 p-4 space-y-3 xl:text-[25px]">
      <FaQuoteLeft className="size-12 absolute -top-8 left-[-5px] " />
      <p>{t("about-me-p-1")}</p>
      <p>{t("about-me-p-2")}</p>
      <p>{t("about-me-p-3")}</p>
    </div>
  );
};
