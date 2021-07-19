import React from "react";
import mobileImg from "../images/iphone.png";

function Designs() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex flex-1 flex-col items-center md:items-start">
            <p className="text-theme_light text-lg">
              Quisque tellus risus, adipisci viverra
            </p>
            <h1 className="text-dark text-6xl">Mobile App Designs</h1>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-xl text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              nihil nobis voluptatum quidem est vel praesentium accusantium
              voluptate dolorem odio culpa beatae{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-1 flex-col space-y-20">
            <div className="flex cursor-pointer flex-col items-center md:items-end space-y-5 text-center md:text-right p-5">
              <span className="">
                <i className="fa fa-globe text-5xl text-theme_light"></i>
              </span>
              <h1 className="text-gray-500 text-3xl">Theme Options</h1>
              <p className="text-gray-500 text-xl">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex cursor-pointer flex-col items-center md:items-end space-y-5 text-center md:text-right p-5">
              <span className="">
                <i className="fa fa-globe text-5xl text-theme_light"></i>
              </span>
              <h1 className="text-gray-500 text-3xl">Theme Options</h1>
              <p className="text-gray-500 text-xl">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
          </div>
          <div className="p-10 flex-1 flex items-center justify-center">
            <img className="w-4/5" src={mobileImg} alt="" />
          </div>
          <div className="flex flex-1 flex-col space-y-20">
            <div className="flex cursor-pointer flex-col items-center md:items-start space-y-5 text-center md:text-left p-5">
              <span className="">
                <i className="fa fa-globe text-5xl text-theme_light"></i>
              </span>
              <h1 className="text-gray-500 text-3xl">Theme Options</h1>
              <p className="text-gray-500 text-xl">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
            <div className="flex cursor-pointer flex-col items-center md:items-start space-y-5 text-center md:text-left p-5">
              <span className="">
                <i className="fa fa-globe text-5xl text-theme_light"></i>
              </span>
              <h1 className="text-gray-500 text-3xl">Theme Options</h1>
              <p className="text-gray-500 text-xl">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designs;
