import React from "react";
import logo1 from "../../../assets/partners/1.png";
import logo2 from "../../../assets/partners/2.png";
import logo3 from "../../../assets/partners/3.png";
import logo4 from "../../../assets/partners/4.png";

const partners = () => {
  return (
    <div id="partners" className="bg-gray-50 py-12 ">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
          Партнеры
        </p>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 lg:mx-auto px-3">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <p className="mx-auto w-12 h-1 bg-red-800 my-4"></p>
      </div>

      {/*List of partners*/}
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:my-16 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 gap-8 px-10 divide-opacity-80 mx-16 sm:mx-0">
        <div className="flex justify-center items-center">
          <img src={logo1} alt="logo one" />
        </div>
        <div className="flex justify-center items-center sm:pl-7">
          <img src={logo2} alt="logo two" />
        </div>
        <div className="flex justify-center items-center sm:pl-7">
          <img src={logo3} alt="logo three" />
        </div>
        <div className="flex justify-center items-center pt-7 sm:pt-0">
          <img src={logo4} alt="logo four" />
        </div>
      </div>
    </div>
  );
};

export default partners;
