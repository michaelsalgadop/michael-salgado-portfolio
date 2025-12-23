import { Logo } from "../components/Logo";

export const Loading = () => {
  return (
    <div className="bg-gray-900 text-white h-dvh flex justify-center items-center">
      <div className="bg-gray-900 w-20 h-20 rounded-full flex justify-center items-center relative">
        <Logo />
        <div className="w-30 h-30 border-10 border-gray-900 border-l-tertiary border-t-tertiary border-b-tertiary rounded-full animate-spin absolute"></div>
      </div>
    </div>
  );
};
