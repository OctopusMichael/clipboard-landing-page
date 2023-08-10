import React from "react";
import logo from "../images/logo.svg";

const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="box">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="box-two">
          <h1> A history of everything you copy</h1>
          <p>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="buttons">
            <button className="btn-ios">
              Download for iOS
            </button>
            <button className="btn-mac">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
