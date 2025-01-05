import { Link } from "react-router-dom";
import projectImg from "../assets/blog.png";

export default function ProjectDetail() {
  
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
        Blog Website Development Project
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        The Blog Website project aims to create a dynamic, responsive platform
        where users can read, comment on, and manage blog posts. Built using
        React, Firebase, and MongoDB, it features user authentication, a blog
        creation system, a wishlist, and a commenting functionality. The website
        will offer a clean, user-friendly interface, ensuring smooth navigation
        across all devices. As a front-end developer, you'll be responsible for
        crafting intuitive and engaging user experiences, ensuring the website
        performs well on mobile, tablet, and desktop devices. You'll work
        alongside designers and back-end developers to bring the site to life,
        implementing features like dynamic pages, user interaction, and smooth
        transitions.
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
          <li className="text-lg text-gray-700">Framer Motion</li>
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
            Blog Management (Create, Update, Delete)
          </li>
          <li className="text-lg text-gray-700">Wishlist Functionality</li>
          <li className="text-lg text-gray-700">
            Responsive Design (Mobile, Tablet, Desktop)
          </li>
          <li className="text-lg text-gray-700">
            Interactive User Interface (with Framer Motion)
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
            Challenge 1: Integrating Firebase Authentication with the blog
            features and handling various edge cases in user authentication.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 2: Ensuring the responsiveness of the design across
            multiple devices while maintaining a clean layout.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 3: Implementing a dynamic featured blog section to
            highlight specific content based on popularity, recency, or admin
            selection, while maintaining performance.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 4: Building an intuitive search and sort functionality for
            blog categories, with a clean and responsive dropdown/select menu
            design.
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
            Shortcoming 1: Performance could be optimized for slower devices,
            such as reducing the size of images and improving lazy loading.
          </li>
          <li className="text-lg text-gray-700">
            Improvement 1: Adding an advanced search and filter option for blog
            posts based on categories or tags.
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

        <button className="w-full md:w-auto bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <a
            href="https://nextera-blog-me.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Live Link
          </a>
        </button>

        <button className="w-full md:w-auto bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <a
            href="https://github.com/programming-hero-web-course2/b10a11-client-side-Moshiur-15"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            View Code on GitHub
          </a>
        </button>
      </div>
    </div>
  );
}
