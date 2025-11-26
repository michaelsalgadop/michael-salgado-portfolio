import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages as lang } from "../../i18n/languages.json";

import { LanguageButton } from "./LanguageButton";
import { LanguageDropdown } from "./LanguageDropdown";

export const Language = () => {
  const languages = useMemo(() => JSON.parse(JSON.stringify(lang)), []);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  return (
    <div className="language relative">
      <LanguageButton
        languages={languages}
        open={open}
        setOpen={setOpen}
        selected={selected}
        t={t}
      />
      {open && (
        <LanguageDropdown
          languages={languages}
          setOpen={setOpen}
          t={t}
          i18n={i18n}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};
