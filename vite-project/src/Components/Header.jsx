import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HamburgerMenu } from "./hamburgerMenu";
import { Link } from "react-scroll";
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  document.body.style.overflow = openMenu ? "hidden" : "auto";
  return (
    <>
      <header className="bg-slate-800 font-['oswald'] shadow-lg h-16 flex px-10 justify-between items-center  text-white  z-50 sticky top-0">
        <p className="hover:cursor-pointer hover:opacity-70 text-xs md:text-base select-none">
          Zajahri Solar
        </p>
        <ul className="hidden md:flex items-center  ">
          <li>
            <Link
              activeClass="font-bold"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer text-slate-300 hover:text-white p-2 m-2 px-4"

            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="font-bold"
              to="about"
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
 className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer text-slate-300 hover:text-white p-2 m-2 px-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="font-bold"
              to="project"
              offset={-70}
              spy={true}
              smooth={true}
              duration={500}
              className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer text-slate-300 hover:text-white p-2 m-2 w-24 text-center"

            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              activeClass="font-bold"
              to="contact"
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer text-slate-300 hover:text-white p-2 m-2 w-24 text-center"

            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            {<RxHamburgerMenu />}
          </button>
          {openMenu && (
            <HamburgerMenu
              className="left-0 right-0"
              close={() => setOpenMenu(false)}
            />
          )}
        </div>
      </header>
    </>
  );
};
