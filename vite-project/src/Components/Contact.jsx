import { useState } from "react";

export const Contact = () => {
  
  function clickHandler(e) {
    e.preventDefault()
    alert('under maintenance')
  }
  return (
    <div className="min-h-screen h-auto bg-slate-800 pt-24 font-['oswald'] " id="contact">
        <p className="pb-3  text-center text-xl md:text-2xl text-white">Contact Me</p>
        <form action="#" className="w-full  ">
          <div className="flex flex-col items-center gap-4 text-black  ">
            <div className="md:flex gap-5">
              <div className="mb-[1rem]">
                <label className="block text-white " htmlFor="">
                  Your Name
                </label>
                <input className="h-10 w-64 border border-black pl-2 border-none bg-slate-200" type="text" />
              </div>
              <div>
                <label className="block text-white" htmlFor="">
                  Email
                </label>
                <input className="h-10 w-64 border border-black pl-2 border-none bg-slate-200" type="text" />
              </div>
            </div>
            
            <div>
              <label className="block text-white" htmlFor="">
                Subject
              </label>
              <input className="h-10 md:w-[33.25rem] w-64 border border-black pl-2 border-none bg-slate-200" type="text" />
            </div>
            <div >
              <label className="block text-white" htmlFor="">Message</label>
            <textarea className='w-64 md:w-[33.25rem] md:h-[10rem] h-[5rem]  border border-black pl-2 border-none bg-slate-200' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button onClick={clickHandler} className='border-slate-300 border-[1px] md:border-2 p-2 px-5 hover:cursor-pointer hover:bg-slate-700 text-slate-300'>Send</button>
          </div>

         
        </form>
      </div>
  );
};
