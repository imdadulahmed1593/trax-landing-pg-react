import React from "react";
import { Link } from "react-router-dom";
import featureImg from "../images/awesome-feature.png";

function Features() {
  return (
    <div className="w-full -mt-56 relative z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col p-5 px-16 justify-center items-center space-y-20 ">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center">
          <div className="p-20 flex flex-col justify-center items-center text-white bg-dark space-y-10 flex-1">
            <span className="">
              <i className="fa fa-globe text-5xl"></i>
            </span>
            <h4 className="text-3xl">
              <Link>SEO Optimized</Link>
            </h4>
            <p className="text-center text-lg">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
          <div className="p-20 flex flex-col justify-center items-center text-white bg-gradient-to-r from-theme_dark to-theme_light  space-y-10 flex-1 h-lg">
            <span className="">
              <i className="fa fa-clipboard text-5xl"></i>
            </span>
            <h4 className="text-3xl">
              <Link>Well Documented</Link>
            </h4>
            <p className="text-center text-lg">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
          <div className="p-20 flex flex-col justify-center items-center text-white bg-dark space-y-10 flex-1">
            <span className="">
              <i className="fa fa-laptop text-5xl"></i>
            </span>
            <h4 className="text-3xl">
              <Link>Fully Responsive</Link>
            </h4>
            <p className="text-center text-lg">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-10 ">
            <h1 className="leading-snug text-center md:text-left text-6xl z-20 text-gray-900">
              Lets take your <br />{" "}
              <span className="text-theme_dark">Business</span> to Next Level
            </h1>
            <p className="text-center md:text-left text-xl w-4/5 text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae voluptates numquam autem ut expedita maxime, aliquam
              excepturi dolorem eos doloribus placeat inventore corrupti, ab
              sunt earum hic eveniet eaque recusandae.
            </p>
            <button className="bg-gradient-to-r from-theme_dark to-theme_light py-4 px-12 text-lg text-white font-semibold rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <img className="w-full" src={featureImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
