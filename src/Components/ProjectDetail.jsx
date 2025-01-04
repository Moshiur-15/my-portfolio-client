import { Link } from "react-router-dom";

export default function ProjectDetail() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Blog Website</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Main Technology Stack
        </h3>
        <ul className="list-disc pl-6">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
          <li>Firebase (for authentication)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Brief Description
        </h3>
        <p className="text-gray-600">
          This is a Blog Website project where users can create, read, update,
          and delete blog posts. It allows users to comment, like posts, and
          authenticate using Firebase. The front-end is built using React.js
          with Tailwind CSS for styling.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Live Link</h3>
        <a
          href="https://yourlivewebsite.com"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Site
        </a>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          GitHub Link
        </h3>
        <a
          href="https://github.com/yourusername/your-repository"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Challenges Faced
        </h3>
        <p className="text-gray-600">
          During the development of this project, I faced a few challenges such
          as:
          <ul className="list-disc pl-6">
            <li>Handling complex state management in React.</li>
            <li>
              Integrating Firebase authentication with multiple user roles.
            </li>
            <li>
              Dealing with database queries and structuring the MongoDB database
              efficiently.
            </li>
          </ul>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Improvements and Future Plans
        </h3>
        <p className="text-gray-600">
          In the future, I plan to:
          <ul className="list-disc pl-6">
            <li>Add real-time chat functionality for user interactions.</li>
            <li>
              Implement a more robust user profile system with customizations.
            </li>
            <li>Improve SEO and page load times for better user experience.</li>
          </ul>
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 rounded-md font-semibold text-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
