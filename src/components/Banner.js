import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative top-0 w-full ">
      <Carousel
        className="h-screen"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-banner1 ">
          <h1 className="leading-normal text-6xl z-20  text-white">
            The Ultimate
            <br /> <span className="font-semibold">Creative Business</span>
            <br /> In Market
          </h1>
          <p className="text-2xl text-white">
            The Best Multipurpose Multi Page Template in Market
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-banner2 ">
          <h1 className="leading-normal text-6xl z-20 text-white">
            The Ultimate
            <br /> <span className="font-semibold">Creative Business</span>
            <br /> In Market
          </h1>
          <p className="text-2xl text-white">
            The Best Multipurpose Multi Page Template in Market
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-banner3 ">
          <h1 className="leading-normal text-6xl z-20 text-white">
            The Ultimate
            <br /> <span className="font-semibold">Creative Business</span>
            <br /> In Market
          </h1>
          <p className="text-2xl text-white">
            The Best Multipurpose Multi Page Template in Market
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
