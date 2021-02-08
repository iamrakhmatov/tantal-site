import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-indigo-100 h-screen">
      <header className="flex flex-col items-center h-full justify-center">
        <img src={logo} className="w-22" alt="logo" />
        <p className="text-lg text-indigo-500 font-semibold">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-indigo-800 border border-indigo-500 bg-indigo-200 rounded-md py-1 px-3 mt-2"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
