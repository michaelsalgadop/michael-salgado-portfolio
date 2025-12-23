import React from "react";
import { Tecnology } from "./Tecnology";
export const Tecnologies = React.memo(
  ({ stack, classesItems, classesPerItem }) => {
    return (
      <ul className={classesItems}>
        {stack.map((tecnology, id) => (
          <Tecnology key={id} text={tecnology} classes={classesPerItem} />
        ))}
      </ul>
    );
  }
);
