import React from "react";

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
