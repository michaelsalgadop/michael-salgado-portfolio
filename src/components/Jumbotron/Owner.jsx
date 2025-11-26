import ownerImg from "../../assets/imgs/michael-salgado.webp";
import explosionEffect from "../../assets/imgs/explosion-colors-effect.jpg";
import { FaCheck } from "react-icons/fa6";
export const Owner = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={explosionEffect}
        alt="Explosion de colores al azar"
        className="absolute z-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto md:h-90 lg:w-300 lg:h-135 mask-radial-from-50% mask-radial-to-70%"
      />
      <img
        src={ownerImg}
        alt="Imagen del autor del portafolio"
        className="h-auto md:h-110 lg:h-140 object-cover mask-radial-from-50% mask-radial-to-70%"
      />
      <span className="absolute flex justify-center items-center font-bold lg:text-[25px] text-blue-600 bottom-0 px-2 py-3 gap-2 bg-black border-2 border-blue-600 shadow-(--box-shadow-button-verified) rounded-3xl">
        <FaCheck />
        michaelsalgadoperez
      </span>
    </div>
  );
};
