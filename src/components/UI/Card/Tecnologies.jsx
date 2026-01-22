import React from "react";
import PropTypes from "prop-types";
import { Tecnology } from "./Tecnology";
export const Tecnologies = React.memo(
  ({ stack, classesItems, classesPerItem }) => {
    return (
      <ul className={classesItems}>
        {stack.map((tecnology) => (
          <Tecnology
            key={tecnology}
            text={tecnology}
            classes={classesPerItem}
          />
        ))}
      </ul>
    );
  }
);
Tecnologies.propTypes = {
  classesItems: PropTypes.string,
  classesPerItem: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Tecnologies.defaultProps = {
  classesItems: "",
  classesPerItem: "",
};
