import { useTranslation } from "react-i18next";
import { Option } from "./Option";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../../context/NavbarContext";
import { useObserverNavbar } from "../../../hooks/useObserverNavbar";

export const Options = ({ isMobile = true }) => {
  const { t } = useTranslation();
  const { sections } = useContext(NavbarContext);
  const { activeObserver } = useObserverNavbar();
  useEffect(() => activeObserver(200), [activeObserver]);
  return (
    <>
      {sections.map(({ name, icon }) => (
        <Option
          key={name}
          url={name}
          text={t(name)}
          isMobile={isMobile}
          Icon={icon}
        />
      ))}
    </>
  );
};
