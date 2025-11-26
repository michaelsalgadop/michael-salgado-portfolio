import { FaCopyright } from "react-icons/fa6";
import ownerImg from "../../assets/imgs/michael-salgado-about.jpg";
export const Owner = (props) => {
  const { handlePersonalBrand, open } = props;
  return (
    <>
      <img
        src={ownerImg}
        alt="Creador de la web"
        className={`img-brand-owner ${
          open ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"
        } size-full object-cover rounded-full transition-all duration-500`}
      />
      <button
        type="button"
        title="Marca personal"
        onClick={handlePersonalBrand}
        className="p-2 text-4xl lg:text-6xl absolute bottom-0 right-10 md:right-5 lg:right-5 bg-black rounded-full border-3 border-blue-600 text-blue-600 cursor-pointer z-20"
      >
        <FaCopyright />
      </button>
    </>
  );
};
