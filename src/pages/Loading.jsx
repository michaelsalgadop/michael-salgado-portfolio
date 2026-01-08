import { useState } from "react";
import { Logo } from "../components/UI/Logo";
import { Loader } from "../components/Loader";

export const Loading = () => {
  const [loadedLogo, setLoadedLogo] = useState(false);
  return (
    <div
      role="status"
      aria-busy="true"
      className="bg-gray-900 text-white min-h-screen flex justify-center items-center flex-col space-y-12"
      style={{ height: "100dvh" }}
    >
      <div className="bg-gray-900 size-45 md:size-50 rounded-full flex justify-center items-center relative">
        <Logo
          isLogoSmall={false}
          loadedLogo={loadedLogo}
          setLoadedLogo={setLoadedLogo}
        />
        <Loader loadedLogo={loadedLogo} />
      </div>
    </div>
  );
};
