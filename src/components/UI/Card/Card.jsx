import { BodyCard } from "./BodyCard";
import { ConceptsCard } from "./ConceptsCard";
import { DateCard } from "./DateCard";
import { Tecnologies } from "./Tecnologies";
import { TitleCard } from "./TitleCard";
import { UbicationCard } from "./UbicationCard";

export const Card = (props) => {
  const {
    date1,
    center = null,
    concepts = null,
    text = null,
    date2 = null,
    position = null,
    education = null,
    ubication = null,
    stack = null,
  } = props;
  return (
    <article className="col-span-12 md:col-span-6 bg-secondary rounded-xl p-4 space-y-2">
      <DateCard date1={date1} date2={date2} />
      <TitleCard center={center} position={position} education={education} />
      {ubication && <UbicationCard ubication={ubication} />}
      {concepts?.length > 0 && <ConceptsCard concepts={concepts} />}
      {text && <BodyCard text={text} />}
      {stack?.length > 0 && (
        <Tecnologies
          stack={stack}
          classesItems="flex gap-4 flex-wrap mt-4"
          classesPerItem="p-2 bg-tertiary rounded-xl"
        />
      )}
    </article>
  );
};
