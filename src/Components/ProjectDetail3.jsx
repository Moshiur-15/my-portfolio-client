import { Link } from "react-router-dom";
import bd_coupon from "../assets/bd-coupon.png";

export default function DiscountPro() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Discount PRO - Coupon Collecting Application</h1>
        <p className="text-lg text-gray-600 mt-2">
          Easily find and use discount coupons for popular e-commerce shops in Bangladesh.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={bd_coupon}
          alt="Discount PRO Screenshot"
          className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Key Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["User Authentication (Email, Google, etc.)", "Coupon Browsing by Brand", "One-Click Coupon Copying", "Fully Responsive Design", "Dynamic Brand-Specific Coupons"].map((feature) => (
            <div key={feature} className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500">
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges Faced Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Challenges Faced</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Handling Firebase authentication securely.", "Ensuring a smooth coupon browsing experience.", "Implementing an efficient copy-to-clipboard feature.", "Keeping brand-specific coupon sections updated in real-time."].map((challenge) => (
            <div key={challenge} className="p-4 bg-white shadow-md rounded-lg border-l-4 border-red-500">
              <p className="text-lg text-gray-700">{challenge}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-4 md:space-y-0">
        <Link to="/" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300">
          Back to Projects
        </Link>
        <a
          href="https://bd-coupon-me.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Moshiur-15/BD-Coupon"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  );
}
