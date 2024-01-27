/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../redux/reservationSlice';
import '../../stylesheets/reservations.css';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const books = useSelector((state) => state.books);
  const userId = useSelector((state) => state.users.user.id);
  const dispatch = useDispatch();

  const handleBookSelection = (book) => {
    setSelectedBooks((prevBooks) => [...prevBooks, book.id]);
  };

  const addReservationHandler = async (e) => {
    e.preventDefault();

    if (!date || !city || selectedBooks.length === 0) {
      return;
    }

    // eslint-disable-next-line prefer-const
    let selectedDate = new Date(date);
    selectedDate.setDate(selectedDate.getDate() + 10);
    const due_date = selectedDate.toISOString().split('T')[0];
    const newReservation = {
      reservation: {
        date,
        due_date,
        city,
      },
      book_ids: selectedBooks,
    };

    await dispatch(createReservation({ userId, newReservation }));
    setDate('');
    setCity('');
    setSelectedBooks([]);
  };

  const displayedBooks = books.books;

  return (
    <div className="reservationForm">
      <h1>Page to Page Library: Book Reservations</h1>

      <form>
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

        <h2 data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Available books</h2>

        {displayedBooks.map((book) => (
          <div key={book.id} className="boxes collapse" id="collapseExample">
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
      </form>
    </div>
  );
};

export default ReservationForm;
