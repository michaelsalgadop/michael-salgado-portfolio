export const Loader = ({ loadedLogo = null }) => {
  return (
    <div
      className={`size-45 md:size-50 border-10 border-gray-900 border-l-tertiary border-t-tertiary border-b-tertiary rounded-full animate-spin absolute ${
        loadedLogo ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500 ease-out`}
    ></div>
  );
};
