
import { FaEye } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const Project = ({ img, title, desc, onWeb }) => {
  return (
    <div className=" flex flex-col items-center mb-16 text-white relative ">
      <div className="   w-[500px] shadow-lg px-10 md:px-0  ">
        <div className="bg-slate-700 flex flex-col items-center rounded-md h-[600px] ">
          <img
            className="h-96 w-full rounded-tl-md rounded-tr-md"
            src={img}
            alt=""
          />
            <p className=" pt-5 text-xl font-bold font-['oswald'] tracking-wider text-yellow-400">
              {title}
            </p>
            <p className="px-5 font-roboto-mono">{desc}</p>
            <div className="flex gap-10 absolute bottom-0">
              <button className=" font-roboto-mono border-white border-2 my-5 py-2 px-3 hover:bg-slate-800">
                open on github
              </button>
              {onWeb && <button className="text-xl"><FaEye /></button> }
              
            </div>

        </div>
      </div>
    </div>
  );
};
