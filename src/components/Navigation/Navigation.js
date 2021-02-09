import { useEffect } from "react";
import Anchor from "./Anchor/Anchor.js";
import Breadcrumb from "./Breadcrumb/Breadcrumb.js";
import logo from "../../assets/tantal-logo.png";
import logoText from "../../assets/tantal-text.png";

const Navigation = (props) => {
  // scroll detection
  const handleScroll = () => {
    if (window.scrollY > 160) {
      document
        .getElementById("logo")
        .classList.replace("sm:block", "sm:hidden");
      document
        .getElementById("logoText")
        .classList.replace("sm:hidden", "sm:block");
      document
        .getElementById("breadcrumb")
        .classList.replace("block", "hidden");
      document.getElementById("anchor").classList.add("sm:py-3", "blur");
    } else {
      document
        .getElementById("logo")
        .classList.replace("sm:hidden", "sm:block");
      document
        .getElementById("logoText")
        .classList.replace("sm:block", "sm:hidden");
      document
        .getElementById("breadcrumb")
        .classList.replace("hidden", "block");
      document.getElementById("anchor").classList.remove("sm:py-3", "blur");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed">
      <div className="relative">
        {/*<!-- Mobile menu button-->*/}
        <div className="flex items-center justify-between sm:hidden w-full relative fixed">
          <div
            className={
              props.menuBtn
                ? "bg-black opacity-60 absolute top-0 left-0 w-full h-full"
                : "bg-black opacity-30 absolute top-0 left-0 w-full h-full"
            }
          ></div>
          <button
            onClick={props.toggler}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white relative z-10"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={props.menuBtn ? "hidden h-8 w-8" : "block h-8 w-8"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={props.menuBtn ? "block h-8 w-8" : "hidden h-8 w-8"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="px-5 py-2 relative z-20">
            <img className="w-28" src={logoText} alt="logo" />
          </div>
        </div>
        {/* Navigation bar*/}
        <div className="flex items-center justify-center sm:items-stretch sm:justify-end ">
          <div
            id="logo"
            className="hidden sm:block absolute left-16 z-20 bg-gray-900 px-5 pt-1 logo-wrapper"
          >
            <img src={logo} className="w-22" alt="Logo" />
          </div>

          <div className="hidden sm:block w-full relative">
            <div
              id="overlay"
              className="absolute w-full h-full opacity-0"
            ></div>
            <div className="flex flex-col">
              <div
                id="logoText"
                className="hidden sm:hidden fixed left-16 top-1 z-20"
              >
                <img src={logoText} className="w-28" alt="Logo" />
              </div>
              <Breadcrumb className="block" />
              <Anchor />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile Menu*/}
      <div className={props.menuBtn ? "block sm:hidden" : "hidden sm:hidden"}>
        <div className="px-2 pt-2 pb-3 relative">
          <div className="bg-black opacity-60 absolute top-0 w-full h-full left-0"></div>
          <Anchor />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
