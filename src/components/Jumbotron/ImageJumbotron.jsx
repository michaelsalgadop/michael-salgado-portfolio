import ownerImg from "../../assets/michael-salgado.jpg";

export const ImageJumbotron = () => {
  return (
    <img
      src={ownerImg}
      alt="Foto del creador del portfolio"
      className="w-100 h-auto object-cover rounded-full"
    />
  );
};
