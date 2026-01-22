import React, { useMemo } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { FeatureCard } from "./FeatureCard";
import PropTypes from "prop-types";

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
DateCard.propTypes = {
  date1: PropTypes.number.isRequired,
  date2: PropTypes.number,
};
