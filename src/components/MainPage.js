import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaVimeoV } from 'react-icons/fa';
import { TiMediaPlayOutline } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const MainPage = () => {
  const books = useSelector((state) => state.books);
  const [currentPage] = useState(1);
  const booksPerPage = 3;

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = books.books.slice(startIndex, endIndex);

  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (displayedBooks.length === 0) {
    return <h2>Currently, there are no books!</h2>;
  }

  return (
    <>
      <div className="list">
        <div className="title">
          <h1>Book library</h1>
          <p>Choose a book to see more details</p>
        </div>
        <ul className="book-list">
          <button
            type="button"
            className="swipe-btn-1"
            aria-label="Previous"
            onClick={handlePrevSlide}
          >
            <img
              className="slide-button"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP5JREFUSEu1lt0RgkAMhHc7sRSpRK1ErEQ7kVLsJM4yd048TwZyBy+8MPk2mz+InR/uHB/NADM7ALhLKMmhFNwEMLMrgDEHJfkTLwRwqo9ecRdAofoF4ALgmSyKZ1BR/SCp4DAzawKYmayYVQKYVZOcsj1hQFKtQp5TsKnWKSFAoVrxR5K32txsBlQKOZCUNdVnE8DM5HVuv7+qPSkKkGJ1StWWFoBG/+QmVKB+FrnWE0h26b2YzSaLitTLbNT7moGvgocBLhvNgeahmk0zIK2DMptPh3UBuGz8iu637Cq10ZHpv66LLvPtrIsWX9cLa2K/k7nmhyF0MtcEzt+8AYK6lxmyTtQQAAAAAElFTkSuQmCC"
              alt="slide"
            />
          </button>
          <Swiper
            onSlideChange={() => ('slide change')}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
          >
            {displayedBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <Link to={`/books/${book.name}`}>
                  <img className="img" src={book.image} alt="book" />
                  <h2>{book.name}</h2>
                  <p>{book.category}</p>
                  <p>{book.info}</p>
                  <div className="icons">
                    <FaFacebookF />
                    <BsTwitter />
                    <FaVimeoV />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="btn"
            aria-label="Next"
            onClick={handleNextSlide}
            disabled={endIndex >= books.books.length}
          >
            <TiMediaPlayOutline />
          </button>
        </ul>
      </div>
    </>
  );
};

export default MainPage;
