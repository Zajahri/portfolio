import p_folio_pic from ".././assets/p_folio_pic.jpg";
export const About = () => {
  return (
    <div className="bg-slate-800 w-auto min-w-screen h-auto min-h-screen text-white">
      <div className=" md:grid md:grid-cols-5  " id="about">
        <div className=" md:col-span-2  w-full  md:h-full flex flex-col items-center ">
          <img
            className="md:h-screen px-5 pt-5  md:pt-0 md:px-0 h-72"
            src={p_folio_pic}
            alt=""
          />
        </div>
        <div className=" md:col-span-3 w-full h-screen px-5 pt-10">
          <p className="text-center text-slate-200 md:text-2xl my-5">About me</p>
          <p className=" text-slate-200">Tamad pa akong maglagay :)</p>
        </div>
      </div>
    </div>
  );
};
