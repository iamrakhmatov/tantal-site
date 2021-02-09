import { Link } from "react-scroll";

const Anchor = () => {
  return (
    <div className="bg-red-300 text-center fixed w-full">
      <div>
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
      </div>
    </div>
  );
};

export default Anchor;
