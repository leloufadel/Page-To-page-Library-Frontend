import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook, getBooks } from '../redux/bookSlice';
import '../stylesheets/bookform.css';
import SideNav from './Navbar/navbar';

const BookForm = () => {
  const [name, setName] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [category, setCategory] = useState('');
  const [info, setInfo] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooks = {
      name,
      cover_photo: coverPhoto,
      author,
      publisher,
      publish_date: publishDate,
      category,
      info,
    };
    await dispatch(createBook(newBooks));
    await dispatch(getBooks());
    setName('');
    setCoverPhoto('');
    setAuthor('');
    setPublisher('');
    setPublishDate('');
    setCategory('');
    setInfo('');
  };

  return (
    <div className="centered-container">
      <form className="input" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" placeholder="Name" id="nameInput" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Image URL" className="form-control" value={coverPhoto} onChange={(e) => setCoverPhoto(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Author" id="nameInput" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Publisher" id="nameInput" className="form-control" value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="date" placeholder="Publisher Date" id="nameInput" className="form-control" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Category" id="nameInput" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Info" id="nameInput" className="form-control" value={info} onChange={(e) => setInfo(e.target.value)} required />
        </div>
        <button type="submit" className="form-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
