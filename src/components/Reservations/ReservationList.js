/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getReservations } from '../../redux/reservationSlice';
import '../../stylesheets/reservations.css';

const ReservationList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.users.user.id);

  useEffect(() => {
    if (userId) {
      dispatch(getReservations(userId));
    }
  }, [userId]);

  const reservations = useSelector((state) => state.reservations);

  return (
    <div className="reservationList">
      <h1>Your Reserved Books</h1>
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {reservations.reservations.map((res) => (
            <React.Fragment key={res.id}>
              {res.books.map((book) => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{res.date}</td>
                  <td>{res.due_date}</td>
                  <td>{res.city}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <NavLink to="/newreservation" className="form-btn">
        Add reservations
      </NavLink>
    </div>
  );
};

export default ReservationList;
