import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/logo-transparent.png";

function Header() {
  return (
    <nav className="w-full bg-transparent absolute z-50">
      <div className="max-w-screen-xl mx-auto px-16  flex p-5 justify-between items-center ">
        <img className="h-14" src={navLogo} alt="" />
        <div className="hidden  md:flex space-x-10 items-center">
          <Link className="text-white text-xl font-sans ">Home</Link>
          <Link className="text-white text-xl font-sans ">About Us</Link>
          <Link className="text-white text-xl font-sans ">Our Pricing</Link>
          <Link className="text-white text-xl font-sans ">Portfolio</Link>
          <Link className="text-white text-xl font-sans ">Our Blog</Link>
          <Link className="text-white text-xl font-sans ">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
