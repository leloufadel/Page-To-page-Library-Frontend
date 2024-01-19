import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

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
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
