import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-neutral-950">
      <div className="absolute inset-0 bg-fiber-pattern rounded-t-2xl pointer-events-none opacity-20"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/farzankln"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farzan-kalantari-abbb9531b/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/farzan_kalantari/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="mailto:farzankalantari.pg@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaEnvelope /> farzankalantari.pg@gmail.com
          </a>
          <a
            href="tel:+989372046438"
            className="flex items-center gap-2 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaPhone /> +98 937 204 64 38
          </a>
        </div>
      </div>
    </footer>
  );
}
