import { Link } from "react-router-dom";
import blog from "../assets/blog.png";
import game from "../assets/gamereviue.png";
import bd_coupon from "../assets/bd-coupon.png";

export default function Projects() {
  return (
    <section className="my-10 ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        My Projects
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Here are a few projects I’ve worked on recently.
      </p>

      <div className="grid grid-cols-1 gap-10 px-3">
        {/* Project 1 */}
        <div
          id="Project1"
          className="max-h-[350px] group bg-white shadow-lg rounded-lg  hover:shadow-xl md:flex"
        >
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={blog}
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
              Blog Website
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
              A responsive blog platform with features like authentication, blog
              creation, commenting, and a wishlist, built using React, Firebase,
              and MongoDB.
            </p>

            <Link
              to="/productDetail"
              className="mt-8 px-6 py-3 rounded-md font-semibold transition duration-300 uppercase text-sm border border-blue-400"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="max-h-[350px] group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl md:flex">
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
            Chill Gamer
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
            Chill Gamer is a React, Firebase, and MongoDB-based game review app with features like user authentication, review submission, ratings, wishlisting, and personalized recommendations.
            </p>

            <Link
              to="/productDetail2"
              className="mt-8 px-6 py-3 rounded-md font-semibold transition duration-300 uppercase text-sm border border-blue-400"
            >
              View Details
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={game}
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="max-h-[350px] group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl md:flex">
          <div className="md:w-1/2">
            <img
              src={bd_coupon}
              alt="Discount PRO Project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:w-1/2 bg-blue-50">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-gray-700 transition duration-200">
              BD Coupon
            </h3>
            <p className="text-gray-600 my-6 text-base lg:text-xl">
              A user-friendly application that allows users to find and use
              discount coupons for popular e-commerce brands in Bangladesh.
            </p>

            <Link
              to="/productDetail3"
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
