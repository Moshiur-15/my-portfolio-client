import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/Mo-logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeDropdown();
    }
  };

  return (
    <div className="bg-slate-100 py-3">
      <div className="navbar container flex justify-between items-center mx-auto lg:px-[75px] xl:px-[180px]">
        <div className="flex-1">
          <div className="dropdown dropdown-open">
            {/* Dropdown button */}
            <label
              tabIndex={0}
              role="button"
              className="btn bg-slate-600 hover:bg-slate-700 text-white border-none rounded-sm text-xl m-1"
              onClick={toggleDropdown}
            >
              {isOpen ? <IoMdClose className="text-2xl" /> : <BiMenuAltLeft className="text-2xl"/>}
            </label>

            {isOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow bg-slate-100 rounded-md w-60"
              >
                <>
                  <li onClick={() => handleScroll("hero")}>
                    <a className="text-lg font-semibold text-gray-800 hover:bg-slate-200 py-2 px-4 rounded-md transition-colors">
                      Hero
                    </a>
                  </li>
                  <li onClick={() => handleScroll("about")}>
                    <a className="text-lg font-semibold text-gray-800 hover:bg-slate-200 py-2 px-4 rounded-md transition-colors">
                      About
                    </a>
                  </li>
                  <li onClick={() => handleScroll("skills")}>
                    <a className="text-lg font-semibold text-gray-800 hover:bg-slate-200 py-2 px-4 rounded-md transition-colors">
                      Skills
                    </a>
                  </li>
                  <li onClick={() => handleScroll("projects")}>
                    <a className="text-lg font-semibold text-gray-800 hover:bg-slate-200 py-2 px-4 rounded-md transition-colors">
                      Projects
                    </a>
                  </li>
                  <li onClick={() => handleScroll("contact")}>
                    <a className="text-lg font-semibold text-gray-800 hover:bg-slate-200 py-2 px-4 rounded-md transition-colors">
                      Contact
                    </a>
                  </li>
                </>
              </ul>
            )}
          </div>
          <img
            src={Logo}
            className="h-16 w-16 cursor-pointer hover:opacity-80 transition duration-300"
            alt="Logo"
          />
        </div>
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/11AQ6lcRpU9M5D46XoRKyBMvid343MBUV/view?usp=sharing"
            className="font-semibold btn py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white border-none text-base rounded-sm uppercase"
          >
            Open RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
