import React from "react";
import "./bubble.css";

function Bubble() {
  return (
    <div>
      <div className="container">
        <div className="bubble">
          <span style={{ "--i": 11, "--x": "50vw", "--y": "50vh" }} />
          <span style={{ "--i": 22, "--x": "-50vw", "--y": "60vh" }} />
          <span style={{ "--i": 33, "--x": "30vw", "--y": "-40vh" }} />
          <span style={{ "--i": 44, "--x": "-20vw", "--y": "-30vh" }} />
          <span style={{ "--i": 55, "--x": "40vw", "--y": "20vh" }} />
          <span style={{ "--i": 66, "--x": "-60vw", "--y": "-10vh" }} />
          <span style={{ "--i": 77, "--x": "70vw", "--y": "30vh" }} />
          <span style={{ "--i": 88, "--x": "-40vw", "--y": "50vh" }} />
          <span style={{ "--i": 99, "--x": "60vw", "--y": "-60vh" }} />
          <span style={{ "--i": 100, "--x": "-50vw", "--y": "-50vh" }} />
        </div>
      </div>
    </div>
  );
}

export default Bubble;
