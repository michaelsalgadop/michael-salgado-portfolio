import React from "react";

export const BodyCard = React.memo(({ text }) => {
  return <p>{text}</p>;
});
