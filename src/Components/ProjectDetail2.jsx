import { Link } from "react-router-dom";
import projectImg from "../assets/gamereviue.png";

export default function ProjectDetail2() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-8">
      {/* Project Screenshot */}
      <div className="mb-8 overflow-hidden rounded-lg">
        <img
          src={projectImg}
          alt="Project Screenshot"
          className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        GameZone - Game Review Application
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Chill Gamer is a game review application designed to help gamers explore
        reviews, ratings, and details of popular games. Built with React,
        Firebase, and MongoDB, it includes features such as user authentication,
        game review submission, ratings, wishlisting, and personalized
        recommendations. The platform provides a visually appealing and
        responsive interface, making it easy for users to navigate and interact.
        This project highlights the integration of dynamic content, user
        interaction, and seamless transitions.
      </p>

      {/* Technologies Used */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">React</li>
          <li className="text-lg text-gray-700">Firebase</li>
          <li className="text-lg text-gray-700">MongoDB</li>
          <li className="text-lg text-gray-700">Tailwind CSS</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">
            User Authentication (Email, Google, etc.)
          </li>
          <li className="text-lg text-gray-700">
            Game Reviews (Add, Edit, Delete Reviews)
          </li>
          <li className="text-lg text-gray-700">Ratings and Wishlisting</li>
          <li className="text-lg text-gray-700">
            Personalized Recommendations based on user preferences
          </li>
          <li className="text-lg text-gray-700">
            Responsive Design (Mobile, Tablet, Desktop)
          </li>
        </ul>
      </div>
      {/* Challenges Faced */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Challenges Faced
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">
            Integrating Firebase Authentication and managing user sessions
            across different features.
          </li>
          <li className="text-lg text-gray-700">
            Optimizing database queries to ensure smooth fetching and filtering
            of game reviews and ratings.
          </li>
          <li className="text-lg text-gray-700">
            Designing a recommendation engine to suggest games based on user
            preferences and activity.
          </li>
          <li className="text-lg text-gray-700">
            Ensuring responsive design and seamless transitions across devices.
          </li>
        </ul>
      </div>

      {/* Shortcomings & Future Improvements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Shortcomings & Future Improvements
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">
            Shortcoming: Performance could be improved for larger datasets,
            especially in loading reviews and ratings.
          </li>
          <li className="text-lg text-gray-700">
            Improvement: Adding advanced search filters (e.g., by genre,
            platform) to make game discovery more efficient.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="md:flex md:justify-between space-y-3 md:space-y-0">
        <button className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105  px-8 py-4 rounded-lg ">
          <Link to="/" className="">
            Back to Projects
          </Link>
        </button>
        {/* Live Link Button */}
        <button className="w-full md:w-auto bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <a
            href="https://gamezone-me.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Live Link
          </a>
        </button>

        {/* View Code on GitHub Button */}
        <button className="w-full md:w-auto bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <a
            href="https://github.com/Moshiur-15/Game-Review"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            View code on GitHub
          </a>
        </button>
      </div>
    </div>
  );
}
