import { NavLink } from "react-router-dom";
import Logo from "../assets/Mo-logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

export default function NavBer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  return (
    <div className="bg-blue-100/60 py-3">
      <div className="navbar container flex justify-between items-center mx-auto lg:px-48 p-0">
        {/* Logo Section */}
        <div className="flex-1">
          <div className="dropdown dropdown-open">
            {/* Dropdown button */}
            <label
              tabIndex={0}
              role="button"
              className="btn bg-blue-200/40 border-none rounded-none text-xl m-1"
              onClick={toggleDropdown}
            >
              <RiMenu3Line />
            </label>

            {/* Dropdown content */}
            {isOpen && ( // Conditional rendering based on isOpen state
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow bg-blue-50 rounded-md w-60"
              >
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={closeDropdown}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-md transition-colors"
                        : "text-lg font-semibold text-gray-800 hover:bg-blue-100 py-2 px-4 rounded-md transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <img
            src={Logo}
            className="h-16 w-16 cursor-pointer hover:opacity-80 transition duration-300"
            alt="Logo"
          />
        </div>

        <div className="flex-none space-x-4">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/1O8qYBtW6xMB6e-MjOk2ordtWH7QRk7i7kcrVBeqARBs/export?format=pdf&exportFormat=pdf"
            className="font-semibold btn py-2 px-4 bg-blue-200/40 border-none text-base rounded-none uppercase"
          >
            Open RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
