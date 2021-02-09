import { Anchor } from "antd";
import "./Anchor.css";
const { Link } = Anchor;

const AnchorLink = () => {
  return (
    <Anchor className="relative text-gray-700 text-lg font-semibold sm:border-b border-gray-900 sm:px-6 lg:px-10">
      <div
        id="overlay"
        className="hidden sm:block absolute top-0 left-0 w-full h-full bg-black opacity-0 z-0"
      ></div>
      <Link
        href="#home"
        title="Главное"
        className="px-5 py-3 hover:text-red-700 text-center relative z-10"
      />
      <Link
        href="#about-us"
        title="О нас"
        className="px-5 py-3 hover:text-red-700 text-center relative z-10"
      />
      <Link
        href="#what-we-do"
        title="Что мы умеем"
        className="px-5 py-3 hover:text-red-700 text-center relative z-10"
      />
      <Link
        href="#partners"
        title="Партнеры"
        className="px-5 py-3 hover:text-red-700 text-center relative z-10"
      />
      <Link
        href="#gallery"
        title="Галлерея"
        className="px-5 py-3 hover:text-red-700 text-center relative z-10"
      />
    </Anchor>
  );
};

export default AnchorLink;
