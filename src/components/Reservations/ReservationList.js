import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ReservationList = () => {
  const reservations = useSelector((state) => state.reservations);

  return (
    <div>
      <h2>Your Reservations!</h2>
      <ul>
        {reservations.reservations.map((res) => (
          <li key={res.id}>
            <p>{res.due_date}</p>
            <p>{res.date}</p>
            <p>{res.city}</p>
            <NavLink to="/ResrvationForm">
              Add reservations
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
