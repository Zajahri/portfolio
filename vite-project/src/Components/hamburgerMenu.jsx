
import { Link } from "react-scroll";
// eslint-disable-next-line react/prop-types
export const HamburgerMenu = ({ close }) => {
  return (
    <div className="z-50 text-white overflow-hidden bg-slate-800 absolute h-[100vh] left-0 right-0 ">
      <div className="flex flex-col items-center w-screen h-screen ">
        <ul className="mt-20 text-center">
          <li className="text-xl py-5">
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="p-2 hover:bg-slate-600"
            >
              <button onClick={close}>Projects</button>
            </Link>
          </li>
          <li className="text-xl py-5">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="p-2 hover:bg-slate-600"
            >
              <button onClick={close}>About</button>
            </Link>
          </li>
          <li className="text-xl py-5">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="p-2 hover:bg-slate-600"
            >
              <button onClick={close}>Contact</button>
            </Link>
          </li>
        </ul>
        <button className="text-3xl mt-52" onClick={close}>
          x
        </button>
      </div>
    </div>
  );
};
