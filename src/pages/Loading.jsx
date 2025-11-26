import { FaCircleNotch } from "react-icons/fa6";

export const Loading = () => {
  return (
    <div className="bg-black text-white h-dvh flex justify-center items-center">
      <FaCircleNotch className="animate-loading w-20 h-20" />
    </div>
  );
};
