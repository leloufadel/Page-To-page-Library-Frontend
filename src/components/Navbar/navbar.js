import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import logoImage from '../../Assets/logolibrary.png'
import '../../stylesheets/navbar.css';




const SideNav = () => {
 
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleSidebar = () => {
    setNavVisible(!isNavVisible);
  };

  return (
  <div className={`nav-container ${isNavVisible ? 'open' : ''} d-flex flex-column align-items-center`}>

      <nav className="burger">
        <button type="button" aria-label="Navigation" className="toggle-button" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
      </nav>
      <nav className={`nav ${isNavVisible ? 'show' : 'hidden'}`}>
        <div className="logo-img">
          <img className="logo" src={logoImage} alt="logo" />
        </div>
      <ul className="sidenav-list d-flex flex-column justify-content-center align-items-center">
        <li className="sidenav-item">
          <NavLink to="/BookList"className="sidenav-link" onClick={toggleSidebar}>
            Books
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
            Reservations
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
            Add Book +
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
            Delete Book-
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
            Reservation +
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/" className="sidenav-link" onClick={toggleSidebar}>
            Reservations -
          </NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/login" className="sidenav-link" onClick={toggleSidebar}>
          Login
          </NavLink>
        </li>
      </ul>
      <div className="sidenav-footer">
        <ul className="sidebar-socials">
          <li>
            <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
              <BsTwitter />
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
              <FaFacebookF />
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
              <FaGooglePlusG />
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
              <FaVimeoV />
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="logo-link" onClick={toggleSidebar}>
              <FaPinterestP />
            </NavLink>
          </li>
        </ul>
        <p className="copyright">
          <span><AiOutlineCopyrightCircle /></span>
          2024 Library Book
        </p>
      </div>
      </nav>
    </div>
  );
};

export default SideNav;
