import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const ConceptsCard = React.memo(({ concepts }) => {
  const { t } = useTranslation();
  return (
    <ul className="mt-4">
      {concepts.map((concept, id) => (
        <li key={id}>- {t(concept)}</li>
      ))}
    </ul>
  );
});
ConceptsCard.propTypes = {
  concepts: PropTypes.arrayOf(PropTypes.string),
};
