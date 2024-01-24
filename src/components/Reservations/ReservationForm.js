/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  // const [book, setBook] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleBookSelection = (book) => {
    setSelectedBooks((prevBooks) => [...prevBooks, book.id]);
  };
  console.log(selectedBooks);
  const addReservationHandler = async (e) => {
    e.preventDefault();

    if (!date || !city || selectedBooks.length === 0) {
      return;
    }

    const selectedDate = new Date(date);
    const due_date = selectedDate.toISOString().split('T')[0];
    const newReservation = {
      reservation: {
        date,
        due_date,
        city,
      },
      book_ids: selectedBooks,
    };

    await dispatch(createReservation(newReservation));
    setDate('');
    setCity('');
    // setBook('');
    setSelectedBooks([]);
  };

  const displayedBooks = books.books;
  console.log(displayedBooks);

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
        {displayedBooks.map((book) => (
          <div key={book.id}>
            <input
              type="checkbox"
              value={book.id}
              onChange={() => handleBookSelection(book)}
            />
            <label htmlFor={book.id}>{book.name}</label>
          </div>
        ))}
        <button type="submit" onClick={addReservationHandler} className="form-btn">
          Add Reservation
        </button>
      </from>
    </div>
  );
};

export default ReservationForm;
