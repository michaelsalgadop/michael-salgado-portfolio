import React, { useMemo } from "react";
import PropTypes from "prop-types";

export const TitleCard = React.memo(({ center, position, education }) => {
  const title = useMemo(() => {
    if (position && center) return `${position} - ${center}`;
    if (education) return education;
    return "";
  }, [center, education, position]);
  return (
    <h4 className="tracking-tight font-bold text-[20px] lg:text-xl xl:text-2xl mb-4">
      {title}
    </h4>
  );
});
TitleCard.propTypes = {
  center: PropTypes.string,
  position: PropTypes.string,
  education: PropTypes.string,
};
