import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoSettingsOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';
import SideNav from './Navbar/navbar';

function BookDetail() {
  const books = useSelector((state) => state.books);

  const { id } = useParams();
  const findBook = books.books.find((book) => book.id === parseInt(id, 10));

  if (!findBook) {
    return <h2>Book not found</h2>;
  }

  return (
    <>
      <SideNav />
      <div className="main">
        <p className="detail-title">Book Detail page</p>
        <div className="book-detail">
          <div className="book-images">
            <img className="img" src={findBook.cover_photo} alt={findBook.name} />
          </div>
          <div className="book-details">
            <h3>{findBook.name}</h3>
            <table className="styled-table">
              <tbody>
                <tr>
                  <th scope="row">Author</th>
                  <td>{findBook.author}</td>
                </tr>
                <tr>
                  <th scope="row">Book Info</th>
                  <td>{findBook.info}</td>
                </tr>
                <tr>
                  <th scope="row">Book Category</th>
                  <td>{findBook.category}</td>
                </tr>
                <tr>
                  <th scope="row">Publisher</th>
                  <td>{findBook.publisher}</td>
                </tr>
                <tr>
                  <th scope="row">Publish Date</th>
                  <td>{findBook.publish_date}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <NavLink to="/newreservation" className="form-bt">
              <IoSettingsOutline className="i" />
              Barrow Book
              <IoChevronForwardCircleOutline className="i" />
            </NavLink>
          </div>
        </div>
        <div className="book-button">
          <button type="button" className="swipe-btn" aria-label="Previous">
            <TiMediaPlayReverseOutline className="slide-button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
