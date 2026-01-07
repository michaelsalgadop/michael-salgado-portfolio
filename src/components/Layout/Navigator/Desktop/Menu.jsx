import { Options } from "../Options";

export const Menu = () => {
  return (
    <ul className="hidden xl:flex items-center space-x-6">
      <Options isMobile={false} />
    </ul>
  );
};
