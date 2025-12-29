import { Tecnologies } from "../Card/Tecnologies";

export const Project = ({ name, date1, text, img, stack, url }) => {
  return (
    <figure className="group relative overflow-hidden rounded-xl block h-[400px]">
      <img
        src={img}
        alt={`Imagen de la web ${name}`}
        className="w-full h-full object-cover object-[50%_30%] scale-110 opacity-0 lg:opacity-100 lg:scale-100 border-0 block lg:group-hover:scale-110 lg:group-hover:opacity-0 transition-all duration-450 ease-in-out"
      />
      <figcaption className="w-full p-4 absolute top-0 left-0 size-full visible opacity-100 lg:invisible lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-450 ease-in-out flex items-center justify-center flex-col z-1 space-y-2">
        <h4 className="tracking-tight font-bold text-[20px]">
          {name} {date1}
        </h4>
        <p className="text-center">{text}</p>
        <a className="btn bg-tertiary rounded-xl" href={url} target="_blank">
          Visitar
        </a>
        {stack?.length > 0 && (
          <Tecnologies
            stack={stack}
            classesItems="absolute bottom-5 flex gap-1 flex-wrap justify-center p-1"
            classesPerItem="p-1 text-gray-400"
          />
        )}
      </figcaption>
      <div className="bg-black opacity-100 lg:opacity-0 lg:group-hover:opacity-100 absolute top-0 left-0 size-full transition-all duration-450 ease-in-out"></div>
    </figure>
  );
};
