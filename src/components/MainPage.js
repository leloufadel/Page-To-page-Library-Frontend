import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaVimeoV,
} from 'react-icons/fa';
import { TiMediaPlayReverseOutline, TiMediaPlayOutline } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';

const MainPage = () => {
  const books = useSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  // Logic for displaying books that current page is 1 and (1-1) * 3 = 0
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  const displayedBooks = books.books.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  if (displayedBooks.length === 0) {
    return (
      <h2>Currently, there are no books!</h2>
    );
  }

  return (
    <>
      <div className="list">
        <div className="title">
          <h1>Book library</h1>
          <p>Choose a book to see more details</p>
        </div>
        <ul className="book-list">
          <button type="button" className="btn" aria-label="Previous" onClick={handlePrevPage}>
            <TiMediaPlayReverseOutline />
          </button>
          {displayedBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.name}`}>
                <img className="img" src={book.cover_photo} alt="book" />
                <h2>{book.name}</h2>
                ....................
                <br />
                <p>{book.category}</p>
                <br />
                <p>{book.info}</p>
                <div className="icons">
                  <FaFacebookF />
                  <BsTwitter />
                  <FaVimeoV />
                </div>
              </Link>
            </li>
          ))}
          <button type="button" className="btn" aria-label="Next" onClick={handleNextPage} disabled={endIndex >= books.books.length}>
            <TiMediaPlayOutline />
          </button>
        </ul>
      </div>
    </>
  );
};

export default MainPage;
