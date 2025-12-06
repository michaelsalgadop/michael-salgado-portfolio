import { useMemo } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
export const LanguageButton = (props) => {
  const { languages, open, setOpen, selected, t } = props;
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
        alt={`${t("flag")} ${languageSelected.code}`}
        className="size-10 object-cover rounded-full mr-2"
      />
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </div>
  );
};
