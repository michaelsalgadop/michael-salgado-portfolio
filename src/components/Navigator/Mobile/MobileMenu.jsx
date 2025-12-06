import { Options } from "../Options";

export const MobileMenu = () => {
  return (
    <div
      className={`absolute min-w-[250px] bg-secondary h-screen top-18 md:top-20 left-0 z-30 transition-all"
      }`}
    >
      <ul className="xl:hidden pb-4">
        <Options />
      </ul>
    </div>
  );
};
