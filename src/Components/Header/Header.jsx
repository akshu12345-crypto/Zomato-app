import React, { useState } from 'react';
import "./Header.scss"
import Logo from "../../assets/images/Zomato-Logo.png";

const Header = () => {
  return (
      <div className="header">
          <nav>
              <span>Get the App</span>
              <div className="right">
                  <span>Investor Relations</span>
                  <span>Add Restaurant</span>
                  <span>Log in</span>
                  <span>Sign in</span>
              </div>
          </nav>
          <div className="headerContent">
              <img src={Logo} />
              <h3>Discover the best food & drinks in patna</h3>
              <div className="input">
                  <select>
                      <option value="chennai">Chennai</option>
                      <option value="jaipur">Jaipur</option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="kolkata">Kolkata</option>
                  </select>
                  <input type='text' placeholder='Search for restaurant, cuisine or a dish' />
              </div>
          </div>
    </div>
  );
}

export default Header;
