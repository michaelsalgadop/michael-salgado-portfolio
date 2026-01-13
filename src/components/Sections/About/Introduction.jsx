import { Trans, useTranslation } from "react-i18next";

export const Introduction = () => {
  const { i18n } = useTranslation();
  return (
    <p className="text-gray-400" key={i18n.language}>
      {/*Traducción de la clave about-section.introduction, ejemplo explicado el /docs/i18n-trans.md */}
      <Trans
        i18nKey="about-section.introduction"
        components={{
          "important-sentence-1": (
            <span className="text-important-about mr-1" />
          ),
          "important-sentence-2": (
            <span className="text-important-about ml-1" />
          ),
          "important-sentence-3": (
            <span className="text-important-about mr-1" />
          ),
          "important-sentence-4": (
            <span className="text-important-about ml-1" />
          ),
        }}
      />
    </p>
  );
};
