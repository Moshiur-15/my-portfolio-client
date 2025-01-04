import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contect() {
  return (
    <section className="py-12 px-2">
      <h2 className="text-4xl uppercase font-bold text-gray-800 text-center mb-8">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <form className="p-10 rounded-lg shadow-lg bg-blue-50 h-full">
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              FULL NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Yoyr Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              MESSAGE <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-medium py-4 border border-blue-300 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            <span>SEND MESSAGE</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </form>

        {/* right side */}
        <section className="p-10 rounded-lg shadow-lg bg-blue-50 h-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            GET IN TOUCH
          </h2>

          <div className="p-5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-4">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">example@email.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-2xl mr-4">
                    <FaPhone />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+880123456789</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 text-2xl mr-4">
                    <FaLocationDot />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Location
                    </h4>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side - Social Links */}
            <div className="text-center mt-6">
              <div className="border border-gray-400/60 mb-5"></div>
              <div className="flex justify-start items-center space-x-6">
                <FaEnvelope className="text-red-500 text-3xl cursor-pointer hover:text-red-600 transition" />
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer hover:text-blue-700 transition" />
                <FaLinkedin className="text-blue-500 text-3xl cursor-pointer hover:text-blue-700 transition" />
                <FaGithub className="text-gray-700 text-3xl cursor-pointer hover:text-black transition" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
