import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
export const LanguageButton = (props) => {
  const { languages, open, setOpen, selected } = props;
  const { t } = useTranslation();
  const languageSelected = useMemo(
    () => languages.find((language) => language.code === selected),
    [selected, languages]
  );
  return (
    <div
      className="cursor-pointer mr-2 flex items-center text-white"
      onClick={() => setOpen(!open)}
    >
      <img
        src={`./flags/${languageSelected.code}.webp`}
        alt={`${t("lang")} ${t(`lang-${languageSelected.code}`)}`}
        className="size-10 object-cover rounded-full mr-2"
      />
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </div>
  );
};
