import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import My_Img from "../assets/my_img.jpg";

export default function Hero() {
  return (
    <div className="py-14 px-6 md:px-16 bg-gray-50">
      <div className="md:flex justify-between items-center space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Hi, I'm Moshiur Islam
          </h2>
          <p className="text-xl text-gray-600 mt-2">Frontend Web Developer</p>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-red-500 transition duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Resume Button */}
          <button className="mt-8 px-6 py-2 bg-blue-200  rounded-md font-semibold hover:bg-blue-400/70 transition duration-300">
            RESUME
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={My_Img}
            className="h-72 w-72 rounded-full object-cover"
            alt="Moshiur Islam"
          />
        </div>
      </div>
    </div>
  );
}
