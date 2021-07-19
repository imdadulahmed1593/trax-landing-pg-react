import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="w-full  ">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-14">
        <div className="text-center space-y-10">
          <p className="text-theme_light text-2xl">Quisque tellus risus</p>
          <h1 className="text-dark text-6xl">Contact Us</h1>
          <p className="text-gray-500 w-4/5 mx-auto text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            fugit, tempore voluptatem quidem possimus delectus placeat debitis
            mollitia repellat quis!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-20 md:space-y-0 md:space-x-40 md:p-10">
          <form
            className="flex-1 flex flex-col items-start justify-between space-y-5"
            action=""
          >
            <input
              className="w-full border border-gray-300 text-gray-300 p-5"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full border border-gray-300 text-gray-300 p-5"
              type="email"
              placeholder="Email"
            />

            <textarea
              className="w-full border border-gray-300 text-gray-300 p-5"
              name=""
              id=""
              cols="30"
              rows="10"
            >
              Message
            </textarea>
            <button className="bg-gradient-to-r from-theme_dark to-theme_light py-4 w-full text-lg text-white font-semibold rounded-full">
              Send
            </button>
          </form>
          <div className="flex-1 text-center md:text-left">
            <p className="text-theme_light text-lg">Trax Agency Worldwide</p>
            <h1 className="text-gray-500 text-2xl">Our London Agency</h1>
            <p className="text-gray-500 text-lg">
              Address: 309, New Cavendish St, EC1Y 3WK
            </p>
            <p className="text-gray-500 text-lg">0800 214 5252</p>
            <p className="text-gray-500 text-lg">0400 20778972</p>
            <p className="text-gray-500 text-lg">polpo@traxagency.com</p>
            <p className="text-gray-500 text-lg">Mon-Fri: 9am-5pm</p>
            <div className="flex items-center justify-center md:justify-start space-x-10">
              <Link>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link>
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link>
                <i className="fab fa-whatsapp"></i>
              </Link>
              <Link>
                <i className="fab fa-envelope"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
