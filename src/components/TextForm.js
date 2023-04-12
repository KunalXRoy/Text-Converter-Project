import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //Make Upper Case
  const handleUpChange = () => {
    // console.log("Uppercase Was Clicked: " + text);
    const newText = text.toUpperCase();
    setText(newText);
    // setText("You have Clicked on HandleUpCkick");

    props.showAlert("Converted To UpperCase", "success");
  };

  //Make Lower Case
  const handleLowCase = () => {
    const newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted To LowerCase", "success");
  };

  //Clear the Text
  const handleClearClick = () => {
    const clearText = "";
    setText(clearText);

    props.showAlert("Text Cleared", "success");
  };

  //Make Copy Text
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // console.log("Copyed Text");

    props.showAlert("Copyed Text", "success");
  };

  //Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  //   text = "new Text"; //Wrong way to change the state
  //   setText("new Text"); //Correct way to change the state

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handleUpChange}>
          Convert To Uppercase
        </button>

        <button className="btn btn-success my-3 mx-2" onClick={handleLowCase}>
          Convert To Lowercase
        </button>

        <button className="btn btn-danger my-3 mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button
          className="btn btn-outline-warning my-3 mx-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>

        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <div className="container my-2 ">
          <h1>Your Text Summery</h1>
          <p>
            {text.split(" ").length} Words & {text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes takes to Read</p>
        </div>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Empty Your Text"}</p>
      </div>
    </>
  );
}
