import React from "react";
import { Tecnology } from "./Tecnology";
export const Tecnologies = React.memo(({ stack }) => {
  return (
    <ul className="flex gap-4 flex-wrap">
      {stack &&
        stack.map((tecnology, id) => <Tecnology key={id} text={tecnology} />)}
    </ul>
  );
});
