import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav__avatar"
        src="https://pyxis.nymag.com/v1/imgs/e09/388/8edb35ae951f5caf561cb15951a9768f14-18-avatar-last-airbender.rsquare.w330.jpg"
        alt="Netflix Profile Aavatar"
      ></img>
    </div>
  );
}

export default Nav;
