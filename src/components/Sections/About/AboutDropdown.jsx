import { useMemo } from "react";
import { AboutSkillButton } from "./AboutSkillButton";

export const AboutDropdown = ({
  id,
  openMenu,
  setOpenMenu,
  buttonProps,
  collapseDropdown = false,
  children,
}) => {
  const isOpen = useMemo(() => openMenu === id, [id, openMenu]);
  const toggle = (e) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === id ? null : id));
  };
  return (
    <div className="relative">
      <AboutSkillButton
        {...buttonProps}
        state={isOpen}
        handlerToogle={toggle}
      />
      <div
        data-state={isOpen ? "open" : "closed"}
        className={`dropdown-menu-about ${
          collapseDropdown ? "right-0 md:left-0" : ""
        }`}
      >
        <ul className="space-y-4">{children}</ul>
      </div>
    </div>
  );
};
