import { FaEnvelopeOpenText, FaGlassMartiniAlt, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/PranaliLogo.png";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-1"
            width={110}
            height={110}
            alt="Logo"
          />
        </a>
      </div>

      <div className="m-10 flex items-center justify-center gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/pranali-krishna-ganesh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        
        <a
          href="Mail: pranaliganesh.9911@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gamil"
        >
          <FaEnvelopeOpenText />
        </a>

        <a
          href="https://github.com/Pranali-tcp2tensor-99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        
        <a
          href="https://www.instagram.com/iampranaliganesh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagramSquare />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;



