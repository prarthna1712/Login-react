import React from "react";
import "./App.css";
import Bubble from "./anim/Bubble";
import Login from "./anim/Login";
import SideBar from "./anim/SideBar";

function App() {
  return (
    <div className="App">
      <Bubble />

      <div className="login-container">
        <Login />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
