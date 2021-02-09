import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  const toggler = () => {
    setMenuBtn((state) => !state);
  };

  return (
    <div className="relative">
      <Navigation menuBtn={menuBtn} toggler={toggler} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
