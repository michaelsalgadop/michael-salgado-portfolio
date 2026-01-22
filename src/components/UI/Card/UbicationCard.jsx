import React from "react";
import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FeatureCard } from "./FeatureCard";

export const UbicationCard = React.memo(({ ubication }) => {
  return (
    <FeatureCard>
      <FaLocationDot className="mr-2" />
      {ubication}
    </FeatureCard>
  );
});
UbicationCard.propTypes = {
  ubication: PropTypes.string,
};
