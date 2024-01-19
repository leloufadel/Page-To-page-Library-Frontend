import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/bookSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  if (books.books.length === 0) {
    return (
      <h2>Currently, theres no Books!</h2>
    );
  }

  return (
    <div>
      <ul>
        {books.books.map((book) => (
          <li key={book.id}>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            <button type="button" onClick={() => dispatch(removeBook(book.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
