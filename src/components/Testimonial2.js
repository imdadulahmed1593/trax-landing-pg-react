import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import envato from "../images/logo-1.png";
import client1 from "../images/testimonial-2.jpg";

function Testimonial2() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 320 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full -mt-40">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex-1 flex flex-col justify-center  items-center space-y-10">
            <img className="w-72 h-72 rounded-full" src={client1} alt="" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-theme_light text-2xl">Hayden Wood</h2>
              <p className="text-gray-500 text-lg">FIVERR, Italy</p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              sunt deserunt, tempore reiciendis officiis, similique, magni
              aspernatur doloribus corporis nam repellendus dolor. Velit,
              debitis quaerat reprehenderit reiciendis id amet nesciunt!
            </p>
            <span className="mx-auto block text-center md:text-left">
              ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>
        <div className="w-full py-40 cursor-pointer">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
            <div>
              <img src={envato} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
