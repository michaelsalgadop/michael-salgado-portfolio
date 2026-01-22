import React from "react";
import PropTypes from "prop-types";

export const SocialLink = React.memo((props) => {
  const { href, Icon, rel } = props;
  return (
    <li>
      <a
        href={href}
        target="_blank"
        {...(rel ? { rel } : {})} // solo agrega rel si existe
        className="text-2xl md:text-3xl text-gray-400 hover:text-white"
      >
        <Icon />
      </a>
    </li>
  );
});
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  rel: PropTypes.string,
};
