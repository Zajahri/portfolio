import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HamburgerMenu } from "./hamburgerMenu";
import { Link } from "react-scroll";
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  document.body.style.overflow = openMenu ? "hidden" : "auto";
  return (
    <>
      <header className="bg-slate-800 h-16 flex px-10 justify-between items-center  text-white  z-50">
        <p className="hover:cursor-pointer hover:opacity-70 text-xs md:text-base select-none">
          Zajahri Solar
        </p>
        <ul className="hidden md:flex items-center  ">
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer text-slate-300 hover:text-white  p-2  m-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer   text-slate-300 hover:text-white  p-2   m-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="select-none hover:outline-slate-600 hover:outline hover:cursor-pointer   text-slate-300 hover:text-white  p-2   m-2"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            {<RxHamburgerMenu />}
          </button>
        </div>
      </header>
      {openMenu && <HamburgerMenu close={() => setOpenMenu(false)} />}
    </>
  );
};
