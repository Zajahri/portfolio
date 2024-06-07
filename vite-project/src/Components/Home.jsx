import profile from ".././assets/pic_pfolio.jpg";
import { FaFacebookF, FaTiktok, FaGithub, FaReact  } from "react-icons/fa6";
import { Header } from "./Header";
export const Home = () => {
  return (
    <div className="h-auto">
      
      <div className="bg-slate-800 h-screen  w-full  md:px-5   md:pt-0 md:pb-24 relative z-10 ">
        <div className="absolute md:bottom-0 bottom-20 right-0 opacity-10 z-0 md:text-[35rem] text-[20rem]"> <FaReact  style={{ color: 'black'}}  /> </div>
        <div className="absolute top-10 md:left-10 left-20 opacity-10 z-0 md:text-[15rem] text-[5rem]"> <FaReact  style={{ color: 'black'}}  /> </div>
        <div className=" flex-col items-center flex md:items-center md:justify-center md:flex-row md:gap-8 pt-16">
          <div className="z-10">
            <img
              className="rounded-full bg-cover lg:h-96 lg:w-96 md:h-80 md:w-80 h-40 w-40"
              src={profile}
              alt=""
            />
          </div>
          <div className="text-center">
          <p className=" text-yellow-400 text-3xl font-bold leading-7 mt-5 md:text-4xl lg:text-5xl tracking-wider">
            Zajahri F. Solar
          </p>
          <p className="text-white font-light mb-4 md:text-base lg:text-lg text-sm">
            Front-end Web Developer
          </p>
          <p className="text-white w-96 px-5 md:px-0 md:text-base lg:text-lg tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum
            laborum sapiente ipsa laboriosam accusamus quo molestias tenetur
            harum sint.
          </p>
          <button className=" md:hidden md:h-10 lg:h-12 mt-10 hover:text-yellow-300 hover:border-yellow-300 h-12 w-48 border-yellow-400 border-2 px-2 hover:bg-slate-900 text-yellow-400">Download my CV</button>

          <div className="flex justify-end gap-5 md:mb-0 mb-5 mr-5 mt-14 md:mt-10 md:mr-0 md:justify-center items-center  ">
            <div className="hover:cursor-pointer hover:opacity-70 bg-blue-600 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full flex justify-center items-center text-white">
              {<FaFacebookF className="text-lg md:text-lg lg:text-xl" />}
            </div>
            <div className="hover:cursor-pointer hover:opacity-70 bg-black h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full flex justify-center items-center text-white">
              {<FaTiktok className="text-sm md:text-lg lg:text-xl" />}
            </div>
            <div className=" hover:cursor-pointer hover:opacity-70 bg-black h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full flex justify-center items-center text-white">
              {<FaGithub className="text-sm md:text-lg lg:text-xl" />}
            </div>
            <button className="hidden hover:cursor-pointer md:block md:h-10 lg:h-12 hover:text-yellow-300 hover:border-yellow-300 h-12 w-48 border-yellow-400 border-2 px-2 hover:bg-slate-900 text-yellow-400">Download my CV</button>
          </div>
 
        </div>
        </div>

      </div>
    </div>
  );
};
