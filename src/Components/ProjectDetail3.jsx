import { Link } from "react-router-dom";
import bd_coupon from "../assets/bd-coupon.png";
export default function ProjectDetail3() {

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-8">
      {/* Project Screenshot */}
      <div className="mb-8 overflow-hidden rounded-lg">
        <img
          src={bd_coupon}
          alt="Project Screenshot"
          className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Discount PRO: Coupon Collecting Application
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discount PRO is a Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh. Users can browse coupons for different brands, see discount amounts, expiry dates, and product categories, and copy coupon codes with a single click. Built with React, Firebase, and a responsive design, this app ensures a smooth user experience across all devices. It also includes features like user authentication, profile management, and dynamic content.
      </p>

      {/* Technologies Used */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">React</li>
          <li className="text-lg text-gray-700">Firebase Authentication</li>
          <li className="text-lg text-gray-700">Tailwind CSS</li>
          <li className="text-lg text-gray-700">MongoDB</li>
          <li className="text-lg text-gray-700">React Router</li>
          <li className="text-lg text-gray-700">React Copy to Clipboard</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg text-gray-700">
            User Authentication (Email, Google Login, etc.)
          </li>
          <li className="text-lg text-gray-700">
            Coupon Browsing (Browse Coupons by Brand)
          </li>
          <li className="text-lg text-gray-700">
            Coupon Copying (Copy Coupon Code with One Click)
          </li>
          <li className="text-lg text-gray-700">
            Responsive Design (Mobile, Tablet, Desktop)
          </li>
          <li className="text-lg text-gray-700">
            Dynamic Content (Brand Details, Sale Information)
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
            Challenge 1: Handling Firebase authentication and ensuring users remain logged in on page reload.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 2: Creating a seamless coupon browsing experience with easy-to-navigate UI and responsive layout.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 3: Implementing the ability to copy coupon codes to clipboard using the react-copy-to-clipboard package.
          </li>
          <li className="text-lg text-gray-700">
            Challenge 4: Ensuring the dynamic sections such as brand-specific coupons and sale information are updated in real-time.
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
            Shortcoming 1: Performance optimization, such as lazy loading of coupons and reducing large image sizes.
          </li>
          <li className="text-lg text-gray-700">
            Improvement 1: Add a search functionality for filtering coupons by category or brand.
          </li>
          <li className="text-lg text-gray-700">
            Improvement 2: Enable user bookmarking of favorite coupons for quick access.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="flex justify-between items-center mt-8 space-x-4">
        <Link
          to="/"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Back to Projects
        </Link>

        {/* Live Link Button */}
        <a
          href="https://bd-coupon-wabsite.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Live Link
        </a>

        {/* View Code on GitHub Button */}
        <a
          href="https://github.com/programming-hero-web-course1/b10-a9-authentication-Moshiur-15"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Code on GitHub
        </a>
      </div>
    </div>
  );
}
