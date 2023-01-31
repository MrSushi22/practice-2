import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinveRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
  </nav>
);

export default Navbar;
