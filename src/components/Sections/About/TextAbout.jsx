import { TitleSection } from "../../UI/TitleSection";
import { AboutItem } from "./AboutItem";
import { Introduction } from "./Introduction";

export const TextAbout = () => {
  return (
    <>
      <TitleSection
        classTitle="title-section-about"
        titleWithoutHighlighting="Sobre"
        titleHighlighting="Mi"
      />
      <Introduction />
      <ul className="space-y-4 mt-5">
        <AboutItem
          title="Resolutivo"
          text="Aporto nuevas ideas y soluciones a cualquier circunstancia y me
            enfoco en las necesidades del cliente."
          classTitle="title-item-about after:w-31"
          classText="text-about"
        />
        <AboutItem
          title="Responsable"
          text="Concienciado en cuidar cada detalle, cada pixel importa."
          classTitle="title-item-about after:w-38"
          classText="text-about"
        />
        <AboutItem
          title="Constante"
          text="Cada objetivo debe cumplirse en la fecha o evento acordado."
          classTitle="title-item-about after:w-31"
          classText="text-about"
        />
        <AboutItem
          title="Colaborativo"
          text="Una barca no se mueve por un solo navegante. Rememos juntos en una misma dirección."
          classTitle="title-item-about after:w-38"
          classText="text-about"
        />
      </ul>
    </>
  );
};
