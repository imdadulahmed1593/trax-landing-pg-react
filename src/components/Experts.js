import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import expert1 from "../images/team-1.jpg";
import expert2 from "../images/team-2.jpg";
import expert3 from "../images/team-3.jpg";
import expert4 from "../images/team-4.jpg";

function Experts() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 320 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-20">
        <div className="flex flex-col md:flex-row items-center mt-20 md:justify-between justify-center">
          <div className="flex flex-1 flex-col items-center md:items-start">
            <p className="text-theme_light text-lg">
              Quisque tellus risus, adipisci viverra
            </p>
            <h1 className="text-dark text-6xl">Meet Our Experts</h1>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-xl text-center md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              voluptates nisi consequatur eius excepturi sit quo distinctio
              maiores quis, natus id fugit dicta recusandae itaque dolore eum,
              veniam nesciunt illo?
            </p>
          </div>
        </div>

        <div className="w-full ">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="cursor-pointer group">
              <img
                src={expert1}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert2}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert3}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert4}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert1}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert2}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert3}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
            <div className="cursor-pointer group">
              <img
                src={expert4}
                alt=""
                className="group-hover:transform group-hover:scale-120"
              />
              <div className="py-5 text-center group-hover:text-white  group-hover:bg-theme_light group-hover:font-semibold">
                <h1 className="text-xl text-dark">Ahmed Imdad</h1>
                <p className="text-base text-gray-500">software developer</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Experts;
