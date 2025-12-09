import React from "react";

export const ConceptsCard = React.memo(({ concepts }) => {
  return (
    <ul className="mt-4">
      {concepts.map((concept, id) => (
        <li key={id}>- {concept}</li>
      ))}
    </ul>
  );
});
