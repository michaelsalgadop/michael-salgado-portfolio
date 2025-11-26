import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const TitlePage = () => {
  const { t } = useTranslation();
  const [wordStack, setWordStack] = useState("");
  const [palabraElegida, setPalabraElegida] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timer = useRef(null);
  const stack = useMemo(
    () => [
      "React",
      "NodeJS",
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "MongoDB",
      "MySQL",
      "Git",
      "Express",
    ],
    []
  );
  const anyadirEliminarLetras = useCallback(() => {
    const palabraMostrar = stack[palabraElegida];
    if (!isDeleting && wordStack.length < palabraMostrar.length) {
      timer.current = setTimeout(() => {
        setWordStack(palabraMostrar.slice(0, wordStack.length + 1));
      }, 100);
    } else if (isDeleting && wordStack.length > 0) {
      timer.current = setTimeout(() => {
        setWordStack(wordStack.slice(0, wordStack.length - 1));
      }, 100);
    } else {
      timer.current = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setPalabraElegida((prev) => (prev + 1) % stack.length);
        }
      }, 500);
    }
  }, [stack, palabraElegida, isDeleting, wordStack]);
  useEffect(() => {
    (async () => {
      anyadirEliminarLetras();
    })();
    return () => clearTimeout(timer);
  }, [anyadirEliminarLetras]);
  return (
    <>
      <h1 className="mt-4 text-[38px] md:text-[58px] text-center">
        {t("tittle-page")}
      </h1>
      <h2 className="text-gemini-gradient text-[38px] md:text-[58px] text-center z-10">
        {wordStack}&nbsp;
      </h2>
    </>
  );
};
