import { useTranslation } from "react-i18next";
import { TitleSection } from "../../UI/TitleSection";
import { AboutItem } from "./AboutItem";
import { Introduction } from "./Introduction";
import { useMemo } from "react";

export const TextAbout = () => {
  const { t, i18n } = useTranslation();
  const underlineTitles = useMemo(() => {
    const map = {
      es: {
        u1: "after:w-31", // clase completa de tailwind, sino no lo hará correcto
        u2: "after:w-38",
        u3: "after:w-31",
        u4: "after:w-38",
      },
      ca: {
        u1: "after:w-28",
        u2: "after:w-38",
        u3: "after:w-28",
        u4: "after:w-38",
      },
      en: {
        u1: "after:w-48",
        u2: "after:w-36",
        u3: "after:w-32",
        u4: "after:w-39",
      },
    };
    // devolvemos el objeto map, devolvemos la propiedad dependiendo del idioma que esté seleccionado, el cual es un objeto.
    return map[i18n.language] || map.es;
  }, [i18n.language]);

  return (
    <>
      <TitleSection
        classTitle="title-section-about"
        titleWithoutHighlighting={t("about-section.title-part-1")}
        titleHighlighting={t("about-section.title-part-2")}
      />
      <Introduction />
      <ul className="space-y-4 mt-5">
        <AboutItem
          title={t("about-section.problem-solving")}
          text={t("about-section.problem-solving-text")}
          classTitle={`title-item-about ${underlineTitles.u1}`}
          classText="text-about"
        />
        <AboutItem
          title={t("about-section.responsible")}
          text={t("about-section.responsible-text")}
          classTitle={`title-item-about ${underlineTitles.u2}`}
          classText="text-about"
        />
        <AboutItem
          title={t("about-section.consistent")}
          text={t("about-section.consistent-text")}
          classTitle={`title-item-about ${underlineTitles.u3}`}
          classText="text-about"
        />
        <AboutItem
          title={t("about-section.collaborative")}
          text={t("about-section.collaborative-text")}
          classTitle={`title-item-about ${underlineTitles.u4}`}
          classText="text-about"
        />
      </ul>
    </>
  );
};
