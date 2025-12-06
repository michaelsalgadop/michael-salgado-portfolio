import ownerImg from "../../assets/michael-about.jpg";
export const ImgOwner = () => {
  return (
    <img
      src={ownerImg}
      alt="Imagen del creador en el apartado sobre mi"
      className="w-100 h-auto object-cover"
    />
  );
};
