import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="ReactJs" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="ReactJs2" about="About" /> */}

      <div className=" container my-3">
        {/* <About /> */}
        <TextForm heading="Enter Text" mode={mode} />
      </div>
    </>
  );
}

export default App;
