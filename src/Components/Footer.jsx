import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const linkStyle = "text-gray-500 hover:text-blue-500 transition";

  return (
    <footer className="bg-blue-100 text-gray-800 py-12 text-center">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="text-center py-2">
          <h3 className="text-xl font-bold text-black mb-6">Contact Us</h3>
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:example@gmail.com"
                aria-label="Gmail"
                className={`${linkStyle}`}
              >
                <FaEnvelope className="w-6 h-6 hover:text-red-500" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`${linkStyle}`}
              >
                <FaGithub className="w-6 h-6 hover:text-gray-900" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`${linkStyle}`}
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`${linkStyle}`}
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      {/* Copyright */}
      <div className="text-sm text-gray-900">
        <p>
          &copy; {new Date().getFullYear()} Moshiur Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
