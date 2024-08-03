import React from "react";
import "./sidebar.css";
import { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`navigation ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="bug-outline" />
              </span>
              <span className="title">Neural Bug</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline" />
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline" />
              </span>
              <span className="title">Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbox-outline" />
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="information-circle-outline" />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline" />
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline" />
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={toggleSidebar} />
      </div>
    </div>
  );
}

export default SideBar;
