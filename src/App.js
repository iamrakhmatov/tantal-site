import { useState } from "react";
import "./App.css";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  const toggler = () => {
    setMenuBtn((state) => !state);
  };

  return (
    <div className="bg-indigo-100 h-screen flex justify-center items-center">
      <div> Hello World </div>
    </div>
  );
}

export default App;
