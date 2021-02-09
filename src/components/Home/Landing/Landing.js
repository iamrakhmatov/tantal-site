import React from "react";
import bg from "../../../assets/images/landing.jpg";
const landing = () => {
  return (
    <div id="home" className="sm:h-screen bg-red-50 overflow-hidden">
      <img className="-mt-12" src={bg} alt="landing-bg" />
    </div>
  );
};

export default landing;
