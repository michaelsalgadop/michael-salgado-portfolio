import { Trans, useTranslation } from "react-i18next";
import { UiLink } from "../../UI/UiLink";

export const Designed = () => {
  const { i18n } = useTranslation();
  return (
    <p key={i18n.language} className="text-center">
      {/* Texto del footer traducible con enlaces usando <Trans /> */}
      <Trans
        i18nKey="footer.designed"
        components={{
          react: (
            <UiLink
              urlLink="https://es.react.dev/"
              classLink="text-tertiary"
              isTargetBlank
            />
          ),
          tailwind: (
            <UiLink
              urlLink="https://tailwindcss.com/"
              classLink="text-tertiary"
              isTargetBlank
            />
          ),
          vscode: (
            <UiLink
              urlLink="https://code.visualstudio.com/"
              classLink="text-tertiary"
              isTargetBlank
            />
          ),
          netlify: (
            <UiLink
              urlLink="https://www.netlify.com/"
              classLink="text-tertiary"
              isTargetBlank
            />
          ),
        }}
      />
    </p>
  );
};
