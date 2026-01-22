import PropTypes from "prop-types";
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
LanguageButton.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
