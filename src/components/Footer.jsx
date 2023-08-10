import React from "react";
import logo from "../images/logo.svg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="section-footer">
        <div className="menu-footer">
          <div className="logo">
            <ul>
              <li>
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Install Guide </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="social">
          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
