import { useMemo } from "react";
import PropTypes from "prop-types";
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
AboutDropdown.propTypes = {
  id: PropTypes.oneOf(["languages", "others"]).isRequired,
  openMenu: PropTypes.oneOf([null, "languages", "others"]),
  setOpenMenu: PropTypes.func.isRequired,
  buttonProps: PropTypes.shape({
    textBtn: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    classIcon: PropTypes.string,
  }).isRequired,
  collapseDropdown: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
