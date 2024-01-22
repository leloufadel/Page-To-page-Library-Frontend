import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaVimeoV } from 'react-icons/fa';
// import { TiMediaPlayReverseOutline, TiMediaPlayOutline } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import '../stylesheets/mainpage.css';



const MainPage = () => {
  const books = useSelector((state) => state.books);
  const [currentPage, setCurrentPage] = useState(1);
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
     <div className="Books-package d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="books-heading">Book library</h1>
        <p className="books-sub-heading">Choose a book to see more details</p>
      </div>
        <div className="Books-list">
          <button
            type="button" className="swipe-btn-1" aria-label="Previous" onClick={handlePrevSlide}
          >
            <img
              className="slide-button"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP5JREFUSEu1lt0RgkAMhHc7sRSpRK1ErEQ7kVLsJM4yd048TwZyBy+8MPk2mz+InR/uHB/NADM7ALhLKMmhFNwEMLMrgDEHJfkTLwRwqo9ecRdAofoF4ALgmSyKZ1BR/SCp4DAzawKYmayYVQKYVZOcsj1hQFKtQp5TsKnWKSFAoVrxR5K32txsBlQKOZCUNdVnE8DM5HVuv7+qPSkKkGJ1StWWFoBG/+QmVKB+FrnWE0h26b2YzSaLitTLbNT7moGvgocBLhvNgeahmk0zIK2DMptPh3UBuGz8iu637Cq10ZHpv66LLvPtrIsWX9cLa2K/k7nmhyF0MtcEzt+8AYK6lxmyTtQQAAAAAElFTkSuQmCC"
              alt="slide"
            />
          </button>
          
          <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {
              console.log(swiper);
              swiperRef.current = swiper;
            }}
            slidesPerView={2} 
            // spaceBetween={10} 
          >
            {displayedBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <Link to={`/books/${book.name}`}>
                  <img className="img" src={book.image} alt="book" />
                  <h2>{book.name}</h2>
                  ....................
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
            type="button" className="swipe-btn-2" aria-label="Next" onClick={handleNextSlide}
// disabled={endIndex >= books.books.length}
          
        >
            <img
            className="slide-button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO9JREFUSEu1ltENwjAQQ+1NYBOYBDoJZRLYhI7STYwsJShSmyZNyX2icu9sX08lOhc798cqQNILwAXAleR8ZIgcQKGpm79JPlshJUDsa1CTmhLgDOAD4ASgSc0mgCQlufkNwBjkTACG2myKgOiRpDuAx1411QCDVtSMpQXYBUjUWEm0zNnYMlu3qCZAoia+L/5pVU0zIGPZTNKb96tDgABJ7ZpIXv8CCIH3sUhSn5BXpvadGrbuVHUGknxdfTZcm6u5K4MwtS3xm+xaBNmswBc0mTq760cA3c9109Q1GcT9zt6YLVuKgNo/1zzX/aviCyWOnxkFdwrCAAAAAElFTkSuQmCC"
            alt="slide"
          />
          </button>
          
        </div>
      </div>
    </>
  );
};

export default MainPage;
