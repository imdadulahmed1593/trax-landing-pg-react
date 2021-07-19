import React from "react";

function Counter() {
  return (
    <div className="w-full bg-parallaxBnr bg-fixed bg-center">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:space-x-20 px-16 py-20 justify-center md:justify-between items-center ">
        <div className="flex flex-1 flex-col text-center space-y-5">
          <h1 className="text-white text-8xl">2010</h1>
          <p className="text-white text-2xl">Since We Started</p>
        </div>
        <div className="flex-1 p-10">
          <p className="text-white text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro
            praesentium animi assumenda repellat. Voluptatibus quisquam facilis
            dolor beatae ducimus?
          </p>
        </div>
        <div className="flex flex-1 flex-col text-center space-y-5">
          <h1 className="text-white text-8xl">895</h1>
          <p className="text-white text-2xl">Since We Started</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
