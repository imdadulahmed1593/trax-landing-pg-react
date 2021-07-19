import React from "react";
import item1 from "../images/gallery-5.jpg";
import item2 from "../images/gallery-6.jpg";
import item3 from "../images/gallery-7.jpg";
import item4 from "../images/gallery-8.jpg";
import item5 from "../images/gallery-9.jpg";
import item6 from "../images/gallery-11.jpg";

function Portfolio() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-14">
        <div className="text-center space-y-10">
          <p className="text-theme_light text-2xl">Let's Explore Out</p>
          <h1 className="text-dark text-6xl">Our Portfolio</h1>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            fugit, tempore voluptatem quidem possimus delectus placeat debitis
            mollitia repellat quis!
          </p>
          <div>
            <span className="text-sm">All /</span>
            <span className="text-sm">Digital /</span>
            <span className="text-sm">Design /</span>
            <span className="text-sm">Brand /</span>
            <span className="text-sm">Graphics </span>
          </div>
        </div>

        <div className="grid grid-rows-6 md:grid-rows-3 w-full">
          <img
            className="object-contain row-start-1 row-span-1  md:row-start-1 md:row-span-2"
            src={item1}
            alt=""
          />
          <img
            className="object-contain row-start-2 row-span-1 md:row-start-1 md:row-span-1"
            src={item3}
            alt=""
          />
          <img
            className="object-contain row-start-3 row-span-1 md:row-start-1 md:row-span-2"
            src={item6}
            alt=""
          />
          <img
            className="object-contain row-start-4 row-span-1 md:row-start-3 md:row-span-1"
            src={item4}
            alt=""
          />
          <img
            className="object-contain row-start-5 row-span-1 md:row-start-2 md:row-span-2"
            src={item2}
            alt=""
          />
          <img
            className="object-contain row-start-6 row-span-1 md:row-start-3 md:row-span-1"
            src={item5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
// grid grid-flow-row-dense grid-cols-3
