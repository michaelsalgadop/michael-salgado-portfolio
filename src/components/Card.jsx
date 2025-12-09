import { BodyCard } from "./Card/BodyCard";
import { DateCard } from "./Card/DateCard";
import { Tecnologies } from "./Card/Tecnologies";
import { TitleCard } from "./Card/TitleCard";
import { UbicationCard } from "./Card/UbicationCard";

export const Card = (props) => {
  const {
    date1,
    center = null,
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
      {text && <BodyCard text={text} />}
      {stack?.length > 0 && <Tecnologies stack={stack} />}
    </article>
  );
};
