import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [book, setBook] = useState('');

  const dispatch = useDispatch();

  const addReservationHandler = async (e) => {
    e.preventDefault();

    if (!date || !city || !book) {
      return;
    }

    await dispatch(createReservation([date, city, book]));
    setDate('');
    setCity('');
    setBook('');
  };

  return (
    <div className="reservationForm">
      <h1>Page to Page Library: Book Reservations</h1>

      <from>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="form-input"
        />
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Book"
          className="form-input"
        />
        <button type="submit" onClick={addReservationHandler} className="form-btn">
          Add Reservation
        </button>
      </from>
    </div>
  );
};

export default ReservationForm;
