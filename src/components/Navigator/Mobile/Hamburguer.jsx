export const Hamburguer = (props) => {
  const { setOpen, open } = props;
  return (
    <div className="flex items-center justify-center lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`hamburguer-btn ${
          open ? "opened" : ""
        } text-lg text-white hover:scale-3d focus:outline-none cursor-pointer`}
      >
        <span className="line-hamburguer-btn border-b-2 border-b-white"></span>
        <span className="line-hamburguer-btn border-b-2 border-b-white"></span>
        <span className="line-hamburguer-btn border-b-2 border-b-white"></span>
        <span className="line-hamburguer-btn border-b-2 border-b-white"></span>
      </button>
    </div>
  );
};
