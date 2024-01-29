import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  FaFacebookF, FaVimeoV,
} from 'react-icons/fa';
import { TiMediaPlayReverseOutline, TiMediaPlayOutline } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';
import '../stylesheets/mainpage.css';

const MainPage = () => {
  const books = useSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState(1);

  // Use react-responsive to determine if the device is a mobile device
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Set booksPerPage to 1 if the device is mobile, otherwise set it to 3
  const booksPerPage = isMobile ? 1 : 3;

  // Logic for displaying books
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
        <div className="book-list">
          <button type="button" className="swipe-btn-1" aria-label="Previous" onClick={handlePrevPage}>
            <TiMediaPlayReverseOutline className="slide-button" />
          </button>
          {displayedBooks.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <div className="Books-package">
                  <img className="images" src={book.cover_photo} alt="book" />
                  <h2>{book.name}</h2>
                  <div className="books-sub-heading">
                    <p className="books-line">........................</p>
                    <p>{book.category}</p>

                    <div className="icons">
                      <FaFacebookF className="icon" />
                      <BsTwitter className="icon" />
                      <FaVimeoV className="icon" />
                    </div>

                  </div>
                </div>
              </Link>
            </div>
          ))}
          <button type="button" className="swipe-btn-2" aria-label="Next" onClick={handleNextPage} disabled={endIndex >= books.books.length}>
            <TiMediaPlayOutline className="slide-button" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
