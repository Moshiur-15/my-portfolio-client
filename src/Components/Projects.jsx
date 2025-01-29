import { Link } from "react-router-dom";
import blog from "../assets/blog.png";
import game from "../assets/gamereviue.png";
import bd_coupon from "../assets/bd-coupon.png";

export default function Projects() {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        My Projects
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Here are a few projects I’ve worked on recently.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-3 lg:px-0">
        <div className="mx-auto group bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 flex flex-col">
          {/* Header Section */}
          <div className="h-48 bg-cover bg-center overflow-hidden">
            <img
              src={blog}
              alt="Project 1"
              className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-bold mb-2">NextEra Blog</h2>
            <p className="text-gray-600">
              A responsive blog platform built with React, Firebase, and
              MongoDB, featuring authentication, blog creation, commenting, and
              a wishlist for an engaging user experience.
            </p>

            {/* Button */}
            <div className="mt-4">
              <Link
                to="project/productDetail"
                className="px-6 py-3 bg-blue-200 rounded-md hover:bg-blue-400/70 transition duration-300 uppercase"
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto group bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 flex flex-col">
          {/* Header Section */}
          <div className="h-48 bg-cover bg-center overflow-hidden">
            <img
              src={game}
              alt="Project 1"
              className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-bold mb-2">Game Zone</h2>
            <p className="text-gray-600">
              Chill Gamer is a game review app built with React, Firebase, and
              MongoDB, featuring user authentication, review submissions.
            </p>

            <div className="mt-4">
              <Link
                to="project/productDetail2"
                className="px-6 py-3 bg-blue-200 rounded-md hover:bg-blue-400/70 transition duration-300 uppercase"
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto group bg-white rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0 flex flex-col">
          <div className="h-48 bg-cover bg-center overflow-hidden">
            <img
              src={bd_coupon}
              alt="Project 1"
              className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col justify-between flex-grow">
            <h2 className="text-xl font-bold mb-2">BD Coupon</h2>
            <p className="text-gray-600">
              A user-friendly application that allows users to find and use
              discount coupons for popular e-commerce brands in Bangladesh.
            </p>

            {/* Button */}
            <div className="mt-4">
              <Link
                to="project/productDetail3"
                className="px-6 py-3 bg-blue-200 rounded-md hover:bg-blue-400/70 transition duration-300 uppercase"
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
