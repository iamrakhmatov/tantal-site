import React from "react";
import bg from "../../../assets/images/landing.jpg";
import bgMobile from "../../../assets/images/landing-mobile.jpg";

const landing = () => {
  return (
    <div id="home" className="sm:h-screen bg-red-50 overflow-hidden">
      <img className="-mt-12 hidden sm:block" src={bg} alt="landing-bg" />
      <img className="-mt-12 block sm:hidden" src={bgMobile} alt="landing-bg" />
    </div>
  );
};

export default landing;
