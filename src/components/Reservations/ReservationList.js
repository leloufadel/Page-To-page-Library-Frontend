import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getReservations } from '../../redux/reservationSlice';

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
    <div>
      <h2>Your borrowed books</h2>
      <ul>
        {reservations.reservations.map((res) => (
          <li key={res.id}>
            <ul>
              {res.books.map((book) => ((
                <li key={book.id}>
                  {book.name}
                </li>
              )))}
            </ul>
            <p>{res.due_date}</p>
            <p>{res.date}</p>
            <p>{res.city}</p>
          </li>
        ))}
        <NavLink to="/newreservation">
          Add reservations
        </NavLink>
      </ul>
    </div>
  );
};

export default ReservationList;
