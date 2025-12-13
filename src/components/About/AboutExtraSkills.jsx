import { useState } from "react";
import { Languages } from "./ExtraSkills/Languages/Languages";
import { Others } from "./ExtraSkills/Others/Others";

export const AboutExtraSkills = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="flex gap-2 py-2">
      <Languages openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Others openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};
