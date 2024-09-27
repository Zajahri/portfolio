import { FaEye } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const Project = ({ img, title, desc, onWeb, link }) => {
  const handleLink = () => {
    window.location.href = link;
  };

  return (
    <div className="flex flex-col items-center pb-24 text-white relative  ">
      <div className="w-full max-w-md shadow-lg px-4 md:px-0">
        <div className="bg-slate-700 flex flex-col items-center rounded-md h-full">
          <img
            className="w-full h-56 md:h-64 rounded-tl-md rounded-tr-md object-cover"
            src={img}
            alt={title}
          />
          <div className="px-4 py-5">
            <p className="text-xl text-center font-bold font-['Oswald'] tracking-wider text-yellow-400">
              {title}
            </p>
            <p className="mt-2 text-sm font-['Roboto Mono']">{desc}</p>
          </div>
          <div className="flex gap-4 mb-5">
            <button
              onClick={handleLink}
              className="font-['Roboto Mono'] border-white border-2 py-2 px-4 hover:bg-slate-800"
            >
              open on github
            </button>
            {onWeb && (
              <button className="text-2xl text-white hover:text-gray-400">
                <FaEye />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
