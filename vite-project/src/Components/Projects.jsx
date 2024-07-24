import PROJECTS from "./proj";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { Project } from "./Project";
export const Projects = () => {
  return (
    <div className="pt-24" id="project">
      <p className="text-white text-center font-['oswald'] text-2xl pb-3">
        My Recent Projects
      </p>
      <div className="lg:grid grid-cols-2">
        {Object.values(PROJECTS).map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.projectName}
            desc={project.description}
            tech={project.tech}
            onWeb={project.onWeb}
          />
        ))}
      </div>
    </div>
  );
};
