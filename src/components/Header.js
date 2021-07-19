import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/logo-transparent.png";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="w-full bg-transparent absolute z-50">
      <div className="max-w-screen-xl mx-auto px-16  flex p-5 justify-between items-center ">
        <img className="h-14" src={navLogo} alt="" />
        <div
          className={
            clicked ? "hidden" : "hidden  md:flex space-x-10 items-center"
          }
        >
          <Link className="text-white text-xl font-sans ">Home</Link>
          <Link className="text-white text-xl font-sans ">About Us</Link>
          <Link className="text-white text-xl font-sans ">Our Pricing</Link>
          <Link className="text-white text-xl font-sans ">Portfolio</Link>
          <Link className="text-white text-xl font-sans ">Our Blog</Link>
          <Link className="text-white text-xl font-sans ">Contact Us</Link>
        </div>
        <div
          className="absolute top-8 md:right-6 right-16 cursor-pointer text-white text-3xl"
          onClick={handleClick}
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div
          className={
            clicked
              ? "absolute top-0 right-0 h-screen w-2/5 flex flex-col space-y-20 bg-gradient-to-r from-theme_dark to-theme_light p-20 items-start justify-start z-50"
              : "hidden"
          }
        >
          <i
            onClick={handleClick}
            className="fas fa-times absolute top-8 right-16 cursor-pointer text-white text-3xl "
          ></i>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            Home
          </Link>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            About Us
          </Link>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            Our Pricing
          </Link>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            Portfolio
          </Link>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            Our Blog
          </Link>
          <Link className="text-white text-xl font-sans transition duration-300 ease-in-out hover:border-b hover:border-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
