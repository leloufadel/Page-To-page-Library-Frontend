import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Library Books</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Reservation</NavLink>
      </li>
      <li>
        <NavLink to="/"> See your Reservations</NavLink>
      </li>
      <li>
        <NavLink to="/">Delete Reservation</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  </div>
);

export default SideNav;
