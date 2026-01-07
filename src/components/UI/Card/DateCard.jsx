import React, { useMemo } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { FeatureCard } from "./FeatureCard";

export const DateCard = React.memo(({ date1, date2 }) => {
  const date = useMemo(
    () => date1 + (date2 ? ` - ${date2}` : ""),
    [date1, date2]
  );
  return (
    <FeatureCard>
      <FaRegCalendar className="mr-2" />
      {date}
    </FeatureCard>
  );
});
