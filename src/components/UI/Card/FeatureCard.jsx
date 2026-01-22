import PropTypes from "prop-types";
export const FeatureCard = ({ children }) => {
  return (
    <p className="text-md md:text-lg text-gray-400 flex items-center font-bold">
      {children}
    </p>
  );
};
FeatureCard.propTypes = {
  children: PropTypes.node.isRequired,
};
