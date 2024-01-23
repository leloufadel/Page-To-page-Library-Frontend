import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetail() {
  const books = useSelector((state) => state.books);

  const { id } = useParams();
  const findBook = books.books.find((book) => book.id === parseInt(id, 10));

  if (!findBook) {
    return <h2>Book not found</h2>;
  }

  return (
    <>
      <div className="main">
        <p className="detail-title">Book Detail page</p>
        <div className="book-detail">
          <div className="book-image">
            <img className="img" src={findBook.image} alt={findBook.name} />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
