import {
  FaShieldAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const linkStyle = "text-gray-500 hover:text-blue-500 transition";

  return (
    <footer className="bg-blue-50 text-gray-300 py-12">
      <div className="container mx-auto text-center space-y-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a href="/home" className={`${linkStyle}`}>
            Home
          </a>
          <a href="/about-me" className={`${linkStyle}`}>
            About Me
          </a>
          <a href="/projects" className={`${linkStyle}`}>
            Projects
          </a>
          <a href="/skills" className={`${linkStyle}`}>
            Skills
          </a>
        </div>

        {/* Privacy and Contact */}
        <div className="flex justify-center space-x-8">
          <a href="#" className={`${linkStyle} flex items-center space-x-2`}>
            <FaShieldAlt className="w-5 h-5" />
            <span>Privacy Policy</span>
          </a>
          <a
            href="/contact"
            className={`${linkStyle} flex items-center space-x-2`}
          >
            <FaEnvelope className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`${linkStyle}`}
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${linkStyle}`}
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={`${linkStyle}`}
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${linkStyle}`}
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
        <hr className="border-gray-700" />
        {/* Footer Bottom */}
        <div className="text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Moshiur Islam. All rights
            reserved.
          </p>
          <p>
            Made with ❤️ using{" "}
            <a
              href="https://reactjs.org/"
              className="text-blue-400 hover:underline"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-blue-400 hover:underline"
            >
              Tailwind CSS
            </a>{" "}
            with{" "}
            <a
              href="https://daisyui.com/"
              className="text-blue-400 hover:underline"
            >
              daisyUI
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
