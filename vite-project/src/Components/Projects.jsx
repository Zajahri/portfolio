import PROJECTS from "./proj";
import { useState } from "react";
import { FaCode } from "react-icons/fa";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("project1");

  const clickHandler = (e) => {
    setSelectedProject(e);
  };

  let content = selectedProject && (
    <div className=" flex flex-col items-center h-[80vh]  ">
      <p className="py-5 text-xl md:text-2xl text-slate-200 font-bold">{PROJECTS[selectedProject].projectName}</p>
      <img
        className="md:h-96 md:w-[34rem] xl:h-[25rem] xl:w-[40rem] w-[70%] h-64 shadow-lg "
        src={PROJECTS[selectedProject].img}
        alt=""
        loading="lazy"
      />
      <div className="flex items-center gap-3 text-center px-5">
        <div className="flex flex-col gap-2">
          <p className=" text-slate-200 mt-5">{PROJECTS[selectedProject].description}</p>
          <p className=" text-slate-200"><span className=" font-bold">Tech stack: </span> {PROJECTS[selectedProject].tech}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-800 w-full min-h-screen pt-20" id="project">
      <div className="md:grid md:grid-cols-5 h-screen ">
        <div className=" md:col-span-1 md:flex md:justify-center items-center pt-5 md:py-0">
          <div className="flex md:flex-col justify-center gap-5 md:gap-16  ">
            <button
              onClick={() => clickHandler("project1")}
              className={`${
                selectedProject === "project1" && "bg-slate-600"
              } border-slate-300 border-[1px] md:border-2 p-2 hover:cursor-pointer text-slate-300`}
            >
              <p className="text-xs md:text-lg ">Project 1</p>
            </button>
            <button
              onClick={() => clickHandler("project2")}
              className={`${
                selectedProject === "project2" && "bg-slate-600"
              } border-slate-300 border-[1px] md:border-2 p-2 hover:cursor-pointer text-slate-300`}
            >
              <p className="text-xs md:text-lg ">Project 2</p>
            </button>
            <button
              onClick={() => clickHandler("project3")}
              className={`${
                selectedProject === "project3" && "bg-slate-600"
              } border-slate-300 border-[1px] md:border-2 p-2 hover:cursor-pointer text-slate-300`}
            >
              <p className="text-xs md:text-lg ">Project 3</p>
            </button>
            <button
              onClick={() => clickHandler("project4")}
              className={`${
                selectedProject === "project4" && "bg-slate-600"
              } border-slate-300 border-[1px] md:border-2 p-2 hover:cursor-pointer text-slate-300`}
            >
              <p className="text-xs md:text-lg ">Project 4</p>
            </button>
          </div>
        </div>
        <div className=" md:col-span-4 flex flex-col  ">
          <ul className=" w-full bg-slate-800 pt-10">{<li>{content}</li>}</ul>
        </div>
      </div>
    </div>
  );
};
