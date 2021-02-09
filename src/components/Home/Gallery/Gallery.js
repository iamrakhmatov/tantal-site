import React from "react";
import img1 from "../../../assets/gallery/1.jpg";
import img2 from "../../../assets/gallery/2.jpg";
import img3 from "../../../assets/gallery/3.jpg";
import img4 from "../../../assets/gallery/4.jpg";

const gallery = () => {
  return (
    <div id="gallery" className="py-12">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
          Галлерея
        </p>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 lg:mx-auto px-3">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <p className="mx-auto w-12 h-1 bg-red-800 my-4"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-16 py-5">
        <div>
          <img
            className="object-cover object-cover h-full w-full"
            src={img1}
            alt="gallery one "
          />
        </div>
        <div>
          <img
            className="object-cover object-cover h-full w-full"
            src={img4}
            alt="gallery two"
          />
        </div>
        <div>
          <img
            className="object-cover object-cover h-full w-full"
            src={img3}
            alt="gallery three"
          />
        </div>
        <div>
          <img
            className="object-cover object-cover h-full w-full"
            src={img2}
            alt="gallery four"
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
