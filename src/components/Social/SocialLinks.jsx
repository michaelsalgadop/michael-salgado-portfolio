import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { SocialLink } from "./SocialLink";
export const SocialLinks = () => {
  return (
    <ul className="flex gap-4 mt-6">
      <SocialLink href="tel:635382150" Icon={FaWhatsapp} />
      <SocialLink
        href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelsalgadop11@outlook.com"
        Icon={FaRegEnvelope}
        rel="noopener noreferrer"
      />
      <SocialLink href="https://github.com/michaelsalgadop" Icon={FaGithub} />
      <SocialLink
        href="https://www.linkedin.com/in/michael-salgado-perez/"
        Icon={FaLinkedin}
      />
      <SocialLink
        href="https://www.instagram.com/michaelsp11/"
        Icon={FaInstagram}
      />
    </ul>
  );
};
