import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  const toggler = () => {
    setMenuBtn((state) => !state);
  };

  return (
    <div className="bg-indigo-100 h-screen">
      <Navigation menuBtn={menuBtn} toggler={toggler} />
    </div>
  );
}

export default App;
