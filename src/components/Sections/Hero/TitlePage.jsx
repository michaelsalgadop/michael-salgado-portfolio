import { useTranslation } from "react-i18next";
import { SocialLinks } from "../../UI/Social/SocialLinks";

export const TitlePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-[45px] md:text-6xl font-bold tracking-tight mt-3">
        Michael Salgado
      </h1>
      <h2 className="text-2xl tracking-tight mt-3">
        Full-Stack<span className="ml-2 text-tertiary">Developer</span>
      </h2>
      <p className="mt-3 text-lg leading-normal text-gray-400">
        {t("frase-hero")}
      </p>
      <SocialLinks />
    </div>
  );
};
