import { useState } from "react";

export const Contact = () => {
  
  function clickHandler(e) {
    e.preventDefault()
    alert('d pa gumagana')
  }
  return (
    <div className="min-h-screen h-auto bg-slate-500 pt-10 " id="contact">
        <p className="py-5 md:py-10  text-center text-xl md:text-3xl text-white">Contact Me</p>
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
          <button onClick={clickHandler} className='mt-5 mb-5 md:mt-5 border-2 text-white border-black pl-2 w-64 md:w-[33.25rem] h-10 md:border-slate-800 hover:bg-slate-800 hover:text-white'>SEND</button>
          </div>

         
        </form>
      </div>
  );
};
