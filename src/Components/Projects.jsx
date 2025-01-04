import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          My Projects
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Here are a few projects I’ve worked on recently.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
                Chill Gamer
              </h3>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                A game review application where gamers can explore, rate, and
                share reviews for various games.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React Router
                </span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  <span>Live Demo </span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 font-medium text-sm"
                >
                  Details
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex">
            <div className="p-6 w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
                Chill Gamer
              </h3>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                A game review application where gamers can explore, rate, and
                share reviews for various games.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React Router
                </span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  <span>Live Demo </span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 font-medium text-sm"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex">
            <div className="w-1/2">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
                Chill Gamer
              </h3>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                A game review application where gamers can explore, rate, and
                share reviews for various games.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  React Router
                </span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <a
                  href="#"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  <span>Live Demo </span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 font-medium text-sm"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
