import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const LanguageDropdown = (props) => {
  const { languages, setOpen, setSelected } = props;
  const { t, i18n } = useTranslation();
  const handleLanguage = (codeLanguage) => {
    setSelected(codeLanguage);
    i18n.changeLanguage(codeLanguage);
    setOpen(false);
  };
  return (
    <div className="absolute w-[125px] xl:w-[150px] top-[45px] right-2.5 z-40">
      {languages?.length > 0 ? (
        <ul className="border-2 border-white rounded-xl bg-slate-900">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center px-1 py-2 cursor-pointer text-white hover:bg-white hover:text-black first:rounded-t-[10px] last:rounded-b-[10px] "
              onClick={() => handleLanguage(lang.code)}
            >
              <img
                src={`./flags/${lang.code}.webp`}
                alt={`${t("lang")} ${t(`lang-${lang.code}`)}`}
                className="size-10 object-cover rounded-full mr-2"
              />
              {lang.label}
            </li>
          ))}
        </ul>
      ) : (
        t("language-not-available")
      )}
    </div>
  );
};
LanguageDropdown.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  setOpen: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};
