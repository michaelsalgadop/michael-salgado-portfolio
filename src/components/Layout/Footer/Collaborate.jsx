import { useTranslation } from "react-i18next";

export const Collaborate = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap text-center justify-center">
      <p className="text-2xl mr-1">{t("work-together")},</p>
      <p className="text-2xl text-tertiary">{t("future-now")}</p>
    </div>
  );
};
