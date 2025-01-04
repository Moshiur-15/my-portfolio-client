import { Link } from "react-router-dom";
import html_css from "../assets/html-css.png";

export default function Projects() {
  return (
    <section className="my-10 group">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        My Projects
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Here are a few projects I’ve worked on recently.
      </p>

      <div className="grid grid-cols-1 gap-8 px-3 group-hover:">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl md:flex">
          <div className="md:w-1/2">
            <img
              src={html_css}
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
              Gaget Habit
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
              A habit-tracking application designed to help users build and
              maintain good habits.
            </p>

            <Link
              to="/productDetail"
              className="mt-8 px-6 py-3 rounded-md font-semibold transition duration-300 uppercase text-sm border border-blue-400"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl md:flex">
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
              Gaget Habit
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
              A habit-tracking application designed to help users build and
              maintain good habits.
            </p>

            <Link
              to="/productDetail"
              className="mt-8 px-6 py-3 rounded-md font-semibold transition duration-300 uppercase text-sm border border-blue-400"
            >
              View Details
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={html_css}
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl md:flex">
          <div className="md:w-1/2">
            <img
              src={html_css}
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
              Gaget Habit
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
              A habit-tracking application designed to help users build and
              maintain good habits.
            </p>

            <Link
              to="/productDetail"
              className="mt-8 px-6 py-3 rounded-md font-semibold transition duration-300 uppercase text-sm border border-blue-400"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
