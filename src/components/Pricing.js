import React from "react";
import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
function Pricing() {
  return (
    <div className="w-full bg-bgGray">
      <div className="max-w-screen-xl mx-auto flex flex-col px-16 py-20 justify-center items-center  space-y-14">
        <div className="text-center">
          <p className="text-theme_light text-lg">
            Quisque tellus risus, adipisci
          </p>
          <h1 className="text-dark text-6xl">Pricing Offers</h1>
        </div>

        <div className="relative">
          <button className="bg-gradient-to-r from-theme_dark to-theme_light py-4 px-16 md:px-32 text-lg text-white font-semibold rounded-full  -mr-5 md:-mr-10 relative z-20">
            Monthly
          </button>
          <button className="bg-white py-4 px-16 md:px-32 text-lg font-semibold rounded-full -ml-5 md:-ml-10 relative z-10">
            Yearly
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-10 md:space-x-10 md:space-y-0">
          <Card className="flex flex-1 flex-col justify-center items-center shadow-md px-10">
            <CardContent className="w-full flex flex-col justify-center ">
              <div className="py-10 border-b border-gray-400">
                <h2 className="text-3xl text-center font-light">Basic</h2>
                <p className="text-lg text-gray-500 text-center">
                  The Standard Version
                </p>
              </div>
              <h1 className="py-10 border-b border-gray-400 text-5xl font-light text-center">
                $9.95<span className="text-lg ">/month</span>
              </h1>

              <ul className="py-10 flex flex-col justify-items-start   space-y-3 items-center list-none">
                <li className="text-lg text-gray-500">Support forum</li>
                <li className="text-lg text-gray-500">Free Hosting</li>
                <li className="text-lg text-gray-500">40MB of storage space</li>
                <li className="text-lg text-gray-500">
                  Social media integration
                </li>
                <li className="text-lg text-gray-500">10GB of storage space</li>
              </ul>
            </CardContent>
            <CardActions className="mb-10">
              <button className="bg-theme_light py-4 px-12 text-lg text-white font-semibold rounded-full">
                Choose Plan
              </button>
            </CardActions>
          </Card>
          <Card className="flex flex-1 flex-col justify-center items-center shadow-md px-10">
            <CardContent className="w-full flex flex-col justify-center ">
              <div className="py-10 border-b border-gray-400">
                <h2 className="text-3xl text-center font-light">Basic</h2>
                <p className="text-lg text-gray-500 text-center">
                  The Standard Version
                </p>
              </div>
              <h1 className="py-10 border-b border-gray-400 text-5xl font-light text-center">
                $9.95<span className="text-lg ">/month</span>
              </h1>

              <ul className="py-10 flex flex-col justify-items-start   space-y-3 items-center list-none">
                <li className="text-lg text-gray-500">Support forum</li>
                <li className="text-lg text-gray-500">Free Hosting</li>
                <li className="text-lg text-gray-500">40MB of storage space</li>
                <li className="text-lg text-gray-500">
                  Social media integration
                </li>
                <li className="text-lg text-gray-500">10GB of storage space</li>
              </ul>
            </CardContent>
            <CardActions className="mb-10">
              <button className="bg-theme_light py-4 px-12 text-lg text-white font-semibold rounded-full">
                Choose Plan
              </button>
            </CardActions>
          </Card>
          <Card className="flex flex-1 flex-col justify-center items-center shadow-md px-10">
            <CardContent className="w-full flex flex-col justify-center ">
              <div className="py-10 border-b border-gray-400">
                <h2 className="text-3xl text-center font-light">Basic</h2>
                <p className="text-lg text-gray-500 text-center">
                  The Standard Version
                </p>
              </div>
              <h1 className="py-10 border-b border-gray-400 text-5xl font-light text-center">
                $9.95<span className="text-lg ">/month</span>
              </h1>

              <ul className="py-10 flex flex-col justify-items-start   space-y-3 items-center list-none">
                <li className="text-lg text-gray-500">Support forum</li>
                <li className="text-lg text-gray-500">Free Hosting</li>
                <li className="text-lg text-gray-500">40MB of storage space</li>
                <li className="text-lg text-gray-500">
                  Social media integration
                </li>
                <li className="text-lg text-gray-500">10GB of storage space</li>
              </ul>
            </CardContent>
            <CardActions className="mb-10">
              <button className="bg-theme_light py-4 px-12 text-lg text-white font-semibold rounded-full">
                Choose Plan
              </button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
