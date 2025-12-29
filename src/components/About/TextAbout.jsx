import { AboutItem } from "./AboutItem";

export const TextAbout = () => {
  return (
    <>
      <h3 className="text-center lg:text-left text-[35px] font-bold tracking-tight mb-2">
        Sobre<span className="text-tertiary ml-2">Mi</span>
      </h3>
      <p className="text-gray-400">
        Soy un desarrollador con casi
        <span className="text-important-about mr-1">4 años de experiencia</span>
        experto en crear
        <span className="text-important-about mr-1">
          diseños únicos, demandados o a medida de cada cliente / empresa
        </span>
        . Diseño y desarrollo
        <span className="text-important-about mr-1">
          APIs REST robustas con CRUD completo. Manejo y manipulación de todo
          tipo de datos y autenticaciones seguras
        </span>
        . Me defino como:
      </p>
      <ul className="space-y-4 mt-5">
        <AboutItem
          title="Resolutivo"
          text="Aporto nuevas ideas y soluciones a cualquier circunstancia y me
            enfoco en las necesidades del cliente."
          classTitle="title-about after:w-31"
          classText="text-about"
        />
        <AboutItem
          title="Responsable"
          text="Concienciado en cuidar cada detalle, cada pixel importa."
          classTitle="title-about after:w-38"
          classText="text-about"
        />
        <AboutItem
          title="Constante"
          text="Cada objetivo debe cumplirse en la fecha o evento acordado."
          classTitle="title-about after:w-31"
          classText="text-about"
        />
        <AboutItem
          title="Colaborativo"
          text="Una barca no se mueve por un solo navegante. Rememos juntos en una misma dirección."
          classTitle="title-about after:w-38"
          classText="text-about"
        />
      </ul>
    </>
  );
};
