import React from "react";
import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const footer = () => {
  return (
    <div className="h-72 bg-gray-800 relative">
      <div className="flex justify-center text-white py-3 text-3xl font-bold tracking-wider text-gray-200">
        Свяжитесь с нами
      </div>
      <div className="flex flex-col justify-center items-center text-gray-300">
        <div className="flex flex-col">
          <div className="flex items-center my-3">
            <PhoneOutlined
              className="text-red-800"
              style={{ fontSize: "26px" }}
            />
            <span className="text-lg ml-4">+998-71 765-4433</span>
          </div>
          <div className="flex items-center mb-3">
            <MailOutlined
              className="text-red-800"
              style={{ fontSize: "25px" }}
            />
            <span className="text-lg ml-4">tantalvehicles@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-around mt-6">
          <InstagramOutlined
            className="cursor-pointer hover:text-red-800 mx-2"
            style={{ fontSize: "40px" }}
          />
          <YoutubeOutlined
            className="cursor-pointer hover:text-red-800 mx-2"
            style={{ fontSize: "40px" }}
          />
          <FacebookOutlined
            className="cursor-pointer hover:text-red-800 mx-2"
            style={{ fontSize: "40px" }}
          />
        </div>
      </div>
      <div className="flex justify-center text-gray-400 font-medium text-md absolute w-full bottom-1 left-0">
        © Все права защищены TanTal.com 2021
      </div>
    </div>
  );
};

export default footer;
