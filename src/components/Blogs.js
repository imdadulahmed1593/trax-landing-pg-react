import React from "react";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-3.jpg";
import blog3 from "../images/blog-4.jpg";

function Blogs() {
  return (
    <div className="w-full bg-bgGray ">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-14">
        <div className="text-center space-y-10">
          <p className="text-theme_light text-2xl">Read Out Our</p>
          <h1 className="text-dark text-6xl">Latest Blog</h1>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            fugit, tempore voluptatem quidem possimus delectus placeat debitis
            mollitia repellat quis!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex flex-col space-y-10 bg-white shadow-md">
            <img className="w-full object-contain" src={blog1} alt="" />
            <h1 className="px-5 text-dark text-3xl hover:text-theme_light">
              Next Large Social Network
            </h1>
            <div className="px-5 space-x-3 flex items-center text-gray-500 text-sm">
              <span className="space-x-2">
                <i className="far fa-cakendar-alt"></i> Jan 14
              </span>
              <span className="space-x-2">
                <i className="far fa-user"></i> Peter
              </span>
              <span className="space-x-2">
                <i className="far fa-comment-dots"></i> 7
              </span>
            </div>
            <p className="px-5 text-gray-500 text-lg pb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
              placeat, iusto nemo natus ipsam.
            </p>
          </div>
          <div className="flex flex-col space-y-10 bg-white shadow-md">
            <img className="w-full object-contain" src={blog2} alt="" />
            <h1 className="px-5 text-dark text-3xl hover:text-theme_light">
              Next Large Social Network
            </h1>
            <div className="px-5 space-x-3 flex items-center text-gray-500 text-sm">
              <span className="space-x-2">
                <i className="far fa-cakendar-alt"></i> Jan 14
              </span>
              <span className="space-x-2">
                <i className="far fa-user"></i> Peter
              </span>
              <span className="space-x-2">
                <i className="far fa-comment-dots"></i> 7
              </span>
            </div>
            <p className="px-5 text-gray-500 text-lg pb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
              placeat, iusto nemo natus ipsam.
            </p>
          </div>
          <div className="flex flex-col space-y-10 bg-white shadow-md">
            <img className="w-full object-contain" src={blog3} alt="" />
            <h1 className="px-5 text-dark text-3xl hover:text-theme_light">
              Next Large Social Network
            </h1>
            <div className="px-5 space-x-3 flex items-center text-gray-500 text-sm">
              <span className="space-x-2">
                <i className="far fa-cakendar-alt"></i> Jan 14
              </span>
              <span className="space-x-2">
                <i className="far fa-user"></i> Peter
              </span>
              <span className="space-x-2">
                <i className="far fa-comment-dots"></i> 7
              </span>
            </div>
            <p className="px-5 text-gray-500 text-lg pb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
              placeat, iusto nemo natus ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
