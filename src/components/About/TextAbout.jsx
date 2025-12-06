import { AboutItem } from "./AboutItem";

export const TextAbout = () => {
  return (
    <>
      <h3 className="text-center lg:text-left text-[45px] md:text-6xl font-bold tracking-tight mb-2">
        Sobre mi
      </h3>
      <ul className="space-y-4 mt-5">
        <AboutItem
          title="Creativo"
          text="Con mucha imaginación a la hora de crear diseños para tanto los sitios
        web en los que he trabajado, como para mis propias webs / proyectos."
          classTitle="title-about after:w-20 lg:after:w-35"
          classText="text-about"
        />
        <AboutItem
          title="Perfeccionista"
          text="Cuido cada detalle, cada pixel importa."
          classTitle="title-about after:w-35 lg:after:w-60"
          classText="text-about"
        />
        <AboutItem
          title="Constante"
          text="Tanto en mis estudios como en el trabajo, todo tenía que salir bien,
            y si no era así, buscaba 1000 maneras para que al final terminara
            saliendo bien."
          classTitle="title-about after:w-25 lg:after:w-44"
          classText="text-about"
        />
        <AboutItem
          title="Mi Rol"
          text="Me denomino como full-stack, aunque en mis trabajos he estado mas
            enfocado como frontend, algo que de manera autodidacta no me ha
            impedido desarrollar mis propios proyectos. He trabajado en
            distintos entornos de desarrollo, desde Ecommerce hasta gestorías,
            en los cuales siempre he querido desempeñar todo mi potencial.
            Además de la experiencia que puedo tener, estoy enfocado en seguir
            aprendiendo nuevas tecnologías y con gran ilusión de crecer mi
            carrera profesional."
          classTitle="title-about after:w-15 lg:after:w-25"
          classText="text-about"
        />
      </ul>
    </>
  );
};
