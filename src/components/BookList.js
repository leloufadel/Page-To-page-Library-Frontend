import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/bookSlice';
import SideNav from './Navbar/navbar';

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
      <SideNav />
      <ul>
        {books.books.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt="book" />
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.pulish_date}</p>
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
