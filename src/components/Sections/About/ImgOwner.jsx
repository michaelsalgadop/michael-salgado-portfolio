import { useTranslation } from "react-i18next";

export const ImgOwner = () => {
  const { t } = useTranslation();
  return (
    <img
      src="/owner/michael-about.jpg"
      alt={t("author-image-about-me-section")}
      title={t("author-image-about-me-section")}
      className="width-full h-auto object-cover rounded-lg hidden lg:inline"
    />
  );
};
