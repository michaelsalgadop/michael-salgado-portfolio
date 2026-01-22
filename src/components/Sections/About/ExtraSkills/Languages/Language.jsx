import { useMemo } from "react";
import PropTypes from "prop-types";

export const Language = ({ languageText, level }) => {
  const levelProperties = useMemo(() => {
    const levelObject = { text: level };
    switch (level) {
      case "C2":
        levelObject.percentage = "100%";
        break;
      case "C1":
        levelObject.percentage = "90%";
        break;
      case "B2":
        levelObject.percentage = "80%";
        break;
      case "B1":
        levelObject.percentage = "70%";
        break;
      case "A2":
        levelObject.percentage = "30%";
        break;
      case "A1":
        levelObject.percentage = "15%";
        break;
      default:
        levelObject.percentage = "15%";
        break;
    }
    return levelObject;
  }, [level]);
  return (
    <li>
      <span className="inline-block mb-0.5">{languageText}</span>
      <div className="h-8 w-full rounded-[5px] bg-gray-900">
        <div
          style={{ width: levelProperties.percentage }}
          className="h-full bg-tertiary flex items-center transition-all duration-250 ease-linear rounded-[5px]"
        >
          <span className="ml-2.5 font-bold color-white">
            {levelProperties.text}
          </span>
        </div>
      </div>
    </li>
  );
};
Language.propTypes = {
  languageText: PropTypes.string.isRequired,
  level: PropTypes.oneOf(["A1", "A2", "B1", "B2", "C1", "C2"]).isRequired,
};
