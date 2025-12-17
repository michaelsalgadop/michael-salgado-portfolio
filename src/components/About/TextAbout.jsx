import { AboutItem } from "./AboutItem";

export const TextAbout = () => {
  return (
    <>
      <h3 className="text-center lg:text-left text-[35px] font-bold tracking-tight mb-2">
        Sobre<span className="text-tertiary ml-2">Mi</span>
      </h3>
      <ul className="space-y-4 mt-5">
        <AboutItem
          title="Creativo"
          text="Creo diseños únicos, agradables y adaptados a los nuevos tiempos"
          classTitle="title-about after:w-25"
          classText="text-about"
        />
        <AboutItem
          title="Perfeccionista"
          text="Cuido cada detalle, cada pixel importa. Todo trabajo realizado debe salir como es esperado"
          classTitle="title-about after:w-42"
          classText="text-about"
        />
        <AboutItem
          title="Constante"
          text="Fundamental en la obtención de mis titulaciones y en cada proyecto que he realizado"
          classTitle="title-about after:w-31"
          classText="text-about"
        />
        <AboutItem
          title="Mi Rol"
          text="Tengo una gran capacidad para adaptarme a cada situación, pudiendo trabajar tanto de Frontend como de Backend, así que me denomino Full-Stack. 
            He trabajado en distintos entornos de desarrollo, desde Ecommerce hasta Gestorías,
            en los cuales he desarrollado todo mi potencial. Además de la experiencia que dispongo, estoy enfocado en seguir
            aprendiendo nuevas tecnologías y con gran ilusión de seguir mi carrera profesional"
          classTitle="title-about after:w-18"
          classText="text-about"
        />
      </ul>
    </>
  );
};
