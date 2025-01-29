import { Link } from "react-router-dom";
import projectImg from "../assets/blog.png";
import NavBar from "./NavBer";

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div
        className="relative bg-cover bg-center min-h-[calc(100vh-400px)]"
        style={{
          backgroundImage: `url(${projectImg})`,
        }}
      >
      </div>

      {/* Project Details Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center my-10">
            Project Overview
          </h2>
          <h2 className="text-3xl font-semibold text-gray-800">
            NextEra Blog
          </h2>
          <p className="text-lg text-gray-600">
            The Blog Website project aims to create a dynamic, responsive
            platform where users can read, comment on, and manage blog posts.
            Built using React, Firebase, and MongoDB, it features user
            authentication, a blog creation system, a wishlist, and a commenting
            functionality. The website will offer a clean, user-friendly
            interface, ensuring smooth navigation across all devices. As a
            front-end developer, you'll be responsible for crafting intuitive
            and engaging user experiences, ensuring the website performs well on
            mobile, tablet, and desktop devices. You'll work alongside designers
            and back-end developers to bring the site to life, implementing
            features like dynamic pages, user interaction, and smooth
            transitions.
          </p>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Firebase",
                "MongoDB",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "User Authentication (Email, Google, etc.)",
              "Blog Management (Create, Update, Delete)",
              "Wishlist Functionality",
              "Responsive Design (Mobile, Tablet, Desktop)",
              "Interactive UI with Framer Motion",
            ].map((feature) => (
              <div
                key={feature}
                className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
              >
                <p className="text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Handling Firebase Authentication and security issues.",
              "Ensuring full responsiveness across all screen sizes.",
              "Implementing a dynamic featured blog section efficiently.",
              "Building an intuitive search and sorting system for blog posts.",
            ].map((challenge) => (
              <div
                key={challenge}
                className="p-4 bg-white shadow-md rounded-lg border-l-4 border-red-500"
              >
                <p className="text-lg text-gray-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Future Improvements
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>
              Optimize performance for slower devices by implementing lazy
              loading.
            </li>
            <li>
              Enhance search and filtering options for better user experience.
            </li>
            <li>
              Integrate a notification system for new blog posts and comments.
            </li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Back to Projects
          </Link>
          <a
            href="https://nextera-blog-me.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            Live Link
          </a>
          <a
            href="https://github.com/Moshiur-15/blog-client"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            GitHub Client
          </a>
          <a
            href="https://github.com/Moshiur-15/blog-server"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
          >
            GitHub Server
          </a>
        </div>
      </div>
    </div>
  );
}
