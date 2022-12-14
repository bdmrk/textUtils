import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // newText ? setText(newText) : setText("No Value Found");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    const text = document.getElementById("myBox");

    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaceClick = () => {
    let removeSpace = text.split(/[ ]+/);

    setText(removeSpace.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "#FFF" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="6"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "#FFF" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLowerClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-warning mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={handleExtraSpaceClick}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "#FFF" : "#042743",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text?.length > 0 ? text : "Write Something To Preview"}</p>
      </div>
    </>
  );
}

TextForm.prototype = { heading: PropTypes.string.isRequired };

TextForm.defaultProps = { heading: "Enter Heading Here" };
