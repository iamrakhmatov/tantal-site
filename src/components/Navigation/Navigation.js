import { useEffect } from "react";
import Anchor from "./Anchor/Anchor.js";
import logo from "../../assets/tantal-logo.png";
import logoText from "../../assets/tantal-text.png";

const Navigation = (props) => {
  // scroll detection
  const handleScroll = () => {
    if (window.scrollY > 160) {
      document
        .getElementById("logo")
        .classList.replace("sm:block", "sm:hidden");
      // document
      //   .getElementById("logoText")
      //   .classList.replace("sm:hidden", "sm:block");
      // document
      //   .getElementById("overlay")
      //   .classList.replace("opacity-0", "opacity-10");
    } else {
      document
        .getElementById("logo")
        .classList.replace("sm:hidden", "sm:block");
      // document
      //   .getElementById("logoText")
      //   .classList.replace("sm:block", "sm:hidden");
      // document
      //   .getElementById("overlay")
      //   .classList.replace("opacity-10", "opacity-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full sm:-mt-16">
      <div className="relative flex items-center justify-between h-16">
        {/*<!-- Mobile menu button-->*/}
        <div className="absolute inset-y-0 left-0 flex items-center justify-between sm:hidden bg-gray-200 w-full">
          <button
            onClick={props.toggler}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={props.menuBtn ? "hidden h-6 w-6" : "block h-6 w-6"}
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
              className={props.menuBtn ? "block h-6 w-6" : "hidden h-6 w-6"}
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
          <div className="px-5">
            <img className="w-28" src={logoText} alt="logo" />
          </div>
        </div>
        {/* Navigation bar*/}
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div
            id="logo"
            className="hidden sm:block absolute left-16 top-16 z-10 bg-gray-900 px-5 pt-1 logo-wrapper"
          >
            <img src={logo} className="w-22" alt="Logo" />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex flex-col absolute right-0 top-16 w-full">
              <div
                id="logoText"
                className="hidden sm:hidden fixed left-16 top-1 z-10"
              >
                <img src={logoText} className="w-28" alt="Logo" />
              </div>
              {/*<Breadcrumb />*/}
              <Anchor />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile Menu*/}
      <div className={props.menuBtn ? "block sm:hidden" : "hidden sm:hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1">{/*<Anchor />*/}</div>
      </div>
    </nav>
  );
};

export default Navigation;
