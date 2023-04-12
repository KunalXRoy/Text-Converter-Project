import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "navy";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextConverter - Dark Mode";
      
      //For Blink in the titleBar
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Now";
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextConverter - Light Mode";

      //For Blink in the titleBar
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 2000);
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="AboutTextUtils" /> */}
        <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>

            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text Here To UpperCase or LowerCase"
                  mode={mode}
                />
              }
            ></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
