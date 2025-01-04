import { NavLink } from "react-router-dom";
import Logo from "../assets/Mo-logo.png";
import { RiMenu3Line } from "react-icons/ri";
export default function NavBer() {
  return (
    <div className="bg-blue-100/60">
      <div className="navbar container flex justify-between items-center mx-auto lg:px-40">
        {/* Logo Section */}
        <div className="flex-1">
          <img
            src={Logo}
            className="h-16 w-16 cursor-pointer hover:opacity-80 transition duration-300"
            alt="Logo"
          />
        </div>

        {/* Navigation and Dropdowns */}
        <div className="flex-none space-x-4">
          <button className="font-semibold btn py-2 px-4 bg-blue-200/40 border-none text-base rounded-none">
            RESUME
          </button>
          {/* Drawer */}
          <div className="drawer">
            {/* Checkbox to control the drawer state */}
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content */}
              <label htmlFor="my-drawer" className="drawer-button ">
                <span className="btn text-xl bg-blue-200/40 border-none rounded-none">
                  <RiMenu3Line />
                </span>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-blue-50 min-h-full w-80 py-16 px-12">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                      : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                  }>
                  Home
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                      : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                  }>
                  Contact
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
