import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toast } from 'react-toastify';
import logoImage from '../../Assets/logolibrary.png';
import '../../stylesheets/navbar.css';
import Logout from '../user/logout';

const SideNav = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleSidebar = () => {
    setNavVisible(!isNavVisible);
  };

  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const onLogout = () => {
    setLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const userData = JSON.parse(localStorage.getItem('user'));
  const { role } = userData;

  const adminWarn = () => {
    if (role !== 'admin') {
      toast.error('You are not an admin');
    }
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
        <ul className="sidenav-list d-flex flex-column justify-content-center">
          <li className="sidenav-item">
            <NavLink to="/MainPage" className="sidenav-link" onClick={toggleSidebar}>
              Books
            </NavLink>
          </li>
          { role === 'admin' && (
          <>
            <li className="sidenav-item">
              <NavLink to="/update" className="sidenav-link" onClick={toggleSidebar}>
                Give Permission
              </NavLink>
            </li>
          </>
          )}
          <li className="sidenav-item">
            <NavLink to="/BookForm" className="sidenav-link" onClick={() => { toggleSidebar(); adminWarn(); }}>
              Add Book +
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/deletebook" className="sidenav-link" onClick={() => { toggleSidebar(); adminWarn(); }}>
              Delete Book -
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/myreservations" className="sidenav-link" onClick={toggleSidebar}>
              My Reservations
            </NavLink>
          </li>
          <li className="sidenav-item">
            <NavLink to="/newreservation" className="sidenav-link" onClick={toggleSidebar}>
              New Reservation
            </NavLink>
          </li>
          <li className="sidenav-item">
            <button type="button" className="sidenav-link sidenav-btn" onClick={onLogout}>
              Logout
            </button>
            {isLogoutModalOpen && <Logout onClose={closeLogoutModal} />}
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
