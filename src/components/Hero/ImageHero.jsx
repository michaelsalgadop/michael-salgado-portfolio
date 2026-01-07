import { useTranslation } from "react-i18next";
export const ImageHero = () => {
  const { t } = useTranslation();
  return (
    <img
      src="/owner/michael-salgado.jpg"
      alt={t("author-image-hero-section")}
      title={t("author-image-hero-section")}
      className="w-100 h-auto object-cover rounded-full"
    />
  );
};
