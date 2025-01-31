import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import My_Img from "../assets/my_img.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="py-14 px-6 md:px-16 bg-gray-50">
      <div className="md:flex justify-between items-center space-y-8 md:space-y-0">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Hi, I'm{" "}
            <span className="">
              <Typewriter
                words={[
                  "Moshiur Islam"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={300}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-2 flex">
            Junior Front-end Web Developer
          </p>

          {/* Social Links */}
          <div className="flex space-x-2.5 my-6">
            <a
              href="mailto:masiurislam28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-red-500 transition hover:duration-1000 hover:scale-110 border p-2 rounded-md"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Moshiur-15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-gray-900 transition hover:duration-1000 hover:scale-110 border p-2 rounded-md"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/moshiur-islam28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-500 transition hover:duration-1000 hover:scale-110 border p-2 rounded-md"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/11AQ6lcRpU9M5D46XoRKyBMvid343MBUV/view?usp=sharing"
            className="font-semibold btn py-2 px-6 bg-slate-600 hover:bg-slate-700 border-none text-base rounded-sm uppercase text-white"
          >
            open RESUME
          </a>
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
