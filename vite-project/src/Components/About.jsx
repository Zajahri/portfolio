import p_folio_pic from ".././assets/p_folio_pic.jpg";
import { FaReact, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { TbBrandTailwind, TbBrandJavascript } from "react-icons/tb";
export const About = () => {
  return (
    <div className="bg-slate-800 font-roboto-mono w-auto h-[1100px] md:h-auto text-white relative"  id="about">
      <div className="absolute md:bottom-46 bottom-64 md:right-96 right-64 opacity-10 z-0 md:text-[15rem] text-[10rem]">
        {" "}
        <FaReact style={{ color: "black" }} />{" "}
      </div>
      <div className="absolute md:bottom-0 bottom-10 right-10 opacity-10 z-0 md:text-[10rem] text-[5rem]">
        {" "}
        <FaReact style={{ color: "black" }} />{" "}
      </div>
      <div  className="text-center  pb-2  text-2xl font-['oswald'] text-yellow-400">About me</div>
      <div className="md:grid grid-cols-3 items-center mx-10 gap-3">
        <div className="w-full md:h-auto ">
          <img
            className="md:h-96 md:w-96 h-48 w-48 mx-auto  object-cover"
            src={p_folio_pic}
            alt=""
          />
        </div>
        <div className="md:h-auto col-span-2 pt-5 flex flex-col justify-center">
          <p className="text-slate-200 text-center mx-5 select-none">
            Hello, my name is Zajahri, and I am currently a 4th Year College at
            PSU-BC. I have developed a strong passion for coding and Web
            development, dedicating countless hours to honing my skills in
            front-end web development. My journey into the world of technology
            began with a curiosity for how websites and applications function,
            which quickly transformed into a deep-seated interest in creating my
            own projects.
          </p>
          <hr className="my-3" />
          <div className="md:grid md:grid-cols-2">
            <div>
              <p className="text-center text-slate-200 md:text-3xl text-xl md:my-5 mb-2 mt-5">
                Education
              </p>
              <div className="flex flex-col gap-5 text-center md:text-start">
                <p>
                  2020 - 2024
                  <span className="block italic">
                    Pangasinan State University - Bayambang Campus
                  </span>
                </p>
                <p>
                  2013 - 2020
                  <span className="block italic">
                    Bayambang National High School
                  </span>
                </p>
                <p>
                  2007 - 2013
                  <span className="block italic">
                    Nibaliw Elementary School
                  </span>
                </p>
              </div>
            </div>
            <hr className="my-5 md:hidden" />
            <div>
              <p className="text-center text-slate-200 md:text-3xl text-xl md:my-5 mb-2 mt-5">
                Technical Skills
              </p>
              <div className="flex flex-col items-center mt-5 md:mt-6">
                <div className="flex flex-col gap-4">
                  <p className="text-sm flex items-center gap-3">
                    <FaHtml5 /> HTML
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <FaCss3 /> CSS
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <TbBrandTailwind /> TAILWIND CSS
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <TbBrandJavascript /> JAVASCRIPT
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <FaReact /> REACT
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <FaFigma /> FIGMA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
