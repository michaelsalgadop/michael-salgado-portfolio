import { useCallback, useContext, useMemo } from "react";
import { NavbarContext } from "../context/NavbarContext";
import { FaHome } from "react-icons/fa";

export const useObserverNavbar = () => {
  const { setActiveLink, sections } = useContext(NavbarContext);
  const copySections = useMemo(
    () => [{ name: "home" }, ...sections],
    [sections]
  );
  const activeObserver = useCallback(
    (offset = 0) => {
      const handleObserver = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: `-${offset}px 0px -80% 0px`, // Ajusta cuando considerar visible
        threshold: 0,
      });
      copySections.forEach(({ name: idSection }) => {
        const element = document.getElementById(idSection);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    },
    [copySections, setActiveLink]
  );

  return { activeObserver };
};
