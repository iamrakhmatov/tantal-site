import { Link } from "react-scroll";

const Anchor = () => {
  return (
    <div
      id="anchor"
      className="sm:border-b border-gray-800 w-full sm:px-12 sm:py-2 relative z-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end text-lg font-medium text-gray-200 sm:text-black">
        <Link
          className="px-3 cursor-pointer"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={700}
        >
          Главное
        </Link>
        <Link
          className="px-3 cursor-pointer"
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          duration={700}
        >
          О нас
        </Link>
        <Link
          className="px-3 cursor-pointer"
          activeClass="active"
          to="what-we-do"
          spy={true}
          smooth={true}
          duration={700}
        >
          Что мы умеем
        </Link>
        <Link
          className="px-3 cursor-pointer"
          activeClass="active"
          to="partners"
          spy={true}
          smooth={true}
          duration={700}
        >
          Партнеры
        </Link>
        <Link
          className="px-3 cursor-pointer"
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          duration={700}
        >
          Галлерея
        </Link>
      </div>
    </div>
  );
};

export default Anchor;
