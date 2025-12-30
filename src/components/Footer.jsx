import { Collaborate } from "./Footer/Collaborate";
import { Designed } from "./Footer/Designed";

export const Footer = () => {
  return (
    <footer className="p-4 text-white space-y-4 mt-20">
      <Collaborate />
      <Designed />
    </footer>
  );
};
