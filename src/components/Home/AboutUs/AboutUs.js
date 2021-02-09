import React from "react";
import logo from "../../../assets/logo.png";

const about = () => {
  return (
    <div id="about-us" className="bg-gray-50">
      <div className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
              О Нас
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
            <p className="mx-auto w-12 h-1 bg-red-800 my-4"></p>
          </div>
          <div className="grid grid-cols-3 py-10 divide-x-4 sm:divide-x-8 divide-gray-700">
            <div className="flex justify-end pr-4 sm:pr-16 items-center">
              <img className="w-28" src={logo} alt="logo" />
            </div>
            <div className="col-span-2 flex items-center justify-center pl-4 sm:p-5 my-2 text-gray-600">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
