import React from "react";
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
