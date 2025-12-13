import { useMemo } from "react";

export const Language = ({ languageText, level }) => {
  const levelProperties = useMemo(() => {
    switch (level) {
      case "C2":
        return { text: "Nativo", percentage: "100%" };
      case "C1":
        return { text: "Avanzado", percentage: "85%" };
      case "B2":
        return { text: "Profesional", percentage: "75%" };
      case "B1":
        return { text: "Intermedio", percentage: "50%" };
      case "A2":
        return { text: "Básico", percentage: "30%" };
      case "A1":
        return { text: "Principiante", percentage: "15%" };
      default:
        return { text: "Principiante", percentage: "15%" };
    }
  }, [level]);
  return (
    <li>
      <span className="inline-block mb-0.5">{languageText}</span>
      <div className="h-8 width-[100%] rounded-[5px] bg-gray-900">
        <div
          className={`w-[${levelProperties.percentage}] h-full bg-tertiary flex items-center transition-all duration-250 ease-linear rounded-[5px]`}
        >
          <span className="ml-2.5 font-bold color-white">
            {levelProperties.text}
          </span>
        </div>
      </div>
    </li>
  );
};
