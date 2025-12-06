import { Tecnology } from "./Tecnology";
import { FaRegCalendar } from "react-icons/fa6";

export const Experience = ({ experience }) => {
  const { date1, date2 = null, position, work, text, stack } = experience;
  return (
    <article className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary rounded-xl p-4 space-y-2">
      <p className="text-gray-400 flex items-center font-bold">
        <FaRegCalendar className="mr-2" />
        {date1}
        {date2 ? ` - ${date2}` : ""}
      </p>
      <h4 className="tracking-tight font-bold">
        {position} - {work}
      </h4>
      <p>{text}</p>
      <ul className="flex gap-4 flex-wrap">
        {stack &&
          stack.map((tecnology, id) => <Tecnology key={id} text={tecnology} />)}
      </ul>
    </article>
  );
};
