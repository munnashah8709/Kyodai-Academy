import React, { useState } from "react";
import "../component/Header.css";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../images/logo.png"

import { NavLink } from "react-router-dom";
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav" style={{ position: "sticky", top: "0px", zIndex: "99", background: "linear-gradient(to top, rgb(206, 184, 156), rgb(230, 100, 101),  rgb(195, 7, 7))" }}>
        <div className="logo">
            <img src={Logo} style={{height:"50px", width:"250px"}} />
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className="fonts  dropdown " >
              <NavLink to="/" >HOME</NavLink>
            </li>

            
            <li className="fonts">
            <div class="dropdown">
                <NavLink >ABOUT</NavLink>
                <div class="dropdown-content">
                  <NavLink to="/About" state={{fontWeight:"unset"}} >About us </NavLink>
                </div>
            </div>
            </li>
            


            <li className="fonts">

              <div class="dropdown">
              <NavLink >SERVICES</NavLink>
                <div class="dropdown-content">
                  <NavLink to="/service" > SERVICE WE PROVIDE </NavLink>
                </div>
            </div>

            </li>



            <li className="fonts">
              <NavLink to="/contact">JOB PLACMENT IN JAPAN</NavLink>
            </li>
            <li className="fonts">
              <NavLink to="/contact">ADMISSION AND COURSE FEE</NavLink>
            </li>
            <li className="fonts">
              <NavLink to="/contact">STUDY IN JAPAN</NavLink>
            </li>
            <li className="fonts">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
           
            <li>
              <a
                href="https://wa.me/+916295247229?"
                target="_thapa">
                <FaWhatsapp className="instagram" style={{ height:"50px", width:"50px", color:"Black"}} />
              </a>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
