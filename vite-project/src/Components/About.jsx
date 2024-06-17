import p_folio_pic from ".././assets/p_folio_pic.jpg";
import { FaReact, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { TbBrandTailwind, TbBrandJavascript  } from "react-icons/tb";
export const About = () => {
  return (
    <div className="bg-slate-800 w-auto h-[1100px] md:h-auto text-white">
      <div className=" md:grid md:grid-cols-5  " id="about">
        <div className=" md:col-span-2  w-full  md:h-full flex flex-col items-center">
          <img
            className="md:h-screen px-5 pt-5 md:pt-0 md:px-0 h-72 "
            src={p_folio_pic}
            alt=""
          />
        </div>
        <div className=" md:col-span-3 h-screen px-5 pt-5">
          <p className="text-center text-slate-200 md:text-3xl text-xl md:mb-5 mb-2">
            About me
          </p>
          <p className=" text-slate-200 text-center mx-5 ">
            Hello, my name is Zajahri, and I am currently a 4th Year College at
            PSU-BC. I have developed a strong passion for coding and Web
            development, dedicating countless hours to honing my skills in
            front-end web development. My journey into the world of technology
            began with a curiosity for how websites and applications function,
            which quickly transformed into a deep-seated interest in creating my
            own projects.
          </p>
          <hr className="my-3"/>
          <div className="md:grid md:grid-cols-2">
            <div className=" md:grid-cols-span-1">
              <p className="text-center text-slate-200 md:text-3xl text-xl md:my-5 mb-2 mt-5">
                Education
              </p>
              <div className="flex flex-col gap-5 text-center md:text-start ">
                <p>
                  2020 - Present
                  <span className="block italic">Pangasinan State University - Bayambang Campus</span>
                </p>
                <p>
                  2013 - 2020
                  <span className="block italic">Bayambang National High School</span>
                </p>
                <p>
                  2007 - 2013
                  <span className="block italic">Nibaliw Elementary School</span>
                </p>
                
              </div>
            </div>
            <hr className="my-5 md:hidden"/>
            <div className=" md:grid-cols-span-1">
              <p className="text-center text-slate-200 md:text-3xl text-xl md:my-5 mb-2 mt-5">
                Soft Skills
              </p>
              <div className=" flex flex-col items-center mt-5 md:mt-6">
                <div className=" flex flex-col gap-4">
                  <p className="text-sm flex items-center gap-3"><span><FaHtml5 /></span>HTML</p>
                  <p className="text-sm flex items-center gap-3"><span><FaCss3 /></span>CSS</p>
                  <p className="text-sm flex items-center gap-3"><span><TbBrandTailwind /></span>TAILWIND CSS</p>
                  <p className="text-sm flex items-center gap-3"><span><TbBrandJavascript  /></span>JAVASCRIPT</p>
                  <p className="text-sm flex items-center gap-3"><span><FaReact /></span>REACT</p>
                  <p className="text-sm flex items-center gap-3"><span><FaFigma /> </span>FIGMA</p>
                </div>
     

              </div>
            </div>
     
          </div>

        </div>
      </div>
    </div>
  );
};
