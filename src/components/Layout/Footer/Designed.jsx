import { UiLink } from "../../UI/UiLink";
export const Designed = () => {
  return (
    <p className="text-center">
      Diseñado libremente con{" "}
      <UiLink
        urlLink="https://es.react.dev/"
        classLink="text-tertiary"
        isTargetBlank
      >
        React
      </UiLink>{" "}
      y{" "}
      <UiLink
        urlLink="https://tailwindcss.com/"
        classLink="text-tertiary"
        isTargetBlank
      >
        Tailwind CSS
      </UiLink>{" "}
      y programado en{" "}
      <UiLink
        urlLink="https://code.visualstudio.com/"
        classLink="text-tertiary"
        isTargetBlank
      >
        Visual Studio Code
      </UiLink>{" "}
      por mí. Implementado con{" "}
      <UiLink
        urlLink="https://www.netlify.com/"
        classLink="text-tertiary"
        isTargetBlank
      >
        Netlify
      </UiLink>
      .
    </p>
  );
};
