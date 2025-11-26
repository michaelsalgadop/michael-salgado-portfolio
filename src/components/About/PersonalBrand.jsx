import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
export const PersonalBrand = (props) => {
  const { open } = props;
  const { t } = useTranslation();
  return (
    <div
      className={`${
        open
          ? "opacity-100 visible rotate-y-0"
          : "opacity-0 invisible rotate-y-180"
      } flex box-brand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full flex-col justify-center transition-all duration-500`}
    >
      <div className="text-blue-600 w-full">
        <FaQuoteLeft />
      </div>
      <p className="text-center italic xl:text-[25px]">{t("personal-brand")}</p>
      <div className="text-blue-600 w-full flex justify-end">
        <FaQuoteRight />
      </div>
    </div>
  );
};
