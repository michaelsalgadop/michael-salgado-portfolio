import { SocialLinks } from "../Social/SocialLinks";

export const TitlePage = () => {
  return (
    <div>
      <h1 className="text-[45px] md:text-6xl font-bold tracking-tight mt-3">
        Michael Salgado
      </h1>
      <h2 className="text-2xl tracking-tight mt-3">Full-Stack Developer</h2>
      <p className="mt-3 text-lg leading-normal text-gray-400">
        Enfocado en crear sitios web con atención en cada detalle, ofreciendo
        una experiencia digital única y creativa.
      </p>
      <SocialLinks />
    </div>
  );
};
