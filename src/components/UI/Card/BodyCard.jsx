import React from "react";
import PropTypes from "prop-types";
export const BodyCard = React.memo(({ text }) => {
  return <p>{text}</p>;
});
BodyCard.propTypes = {
  text: PropTypes.string,
};
