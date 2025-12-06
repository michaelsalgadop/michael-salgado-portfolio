import { Options } from "../Options";

export const Menu = () => {
  return (
    <ul className="hidden xl:flex items-center">
      <Options isMobile={false} />
    </ul>
  );
};
