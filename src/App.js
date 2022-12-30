import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// react router component
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "warning");
    }
  };

  const showAlert = (message, type = "success") => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      {" "}
      {/* <Router> */}
      <Navbar title="ReactJs" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="ReactJs2" about="About" /> */}
      <Alert alert={alert} />
      <div className=" container my-3">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Routes> */}
        {/* <Route exact path="/about" element={ */}
        {/* <About /> */}
        {/* } />*/}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
        {/* }
            /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
