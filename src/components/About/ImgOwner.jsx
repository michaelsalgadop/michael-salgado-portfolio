import ownerImg from "../../assets/michael-about.jpg";
export const ImgOwner = () => {
  return (
    <img
      src={ownerImg}
      alt="Imagen del creador en el apartado sobre mi"
      className="width-full h-auto object-cover rounded-lg hidden lg:inline"
    />
  );
};
