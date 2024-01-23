import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooks, fetchBooks } from '../redux/bookSlice';

const BookForm = () => {
  const [name, setName] = useState('');
  const [cover_photo, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publish_date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [info, setInfo] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooks = {
      name,
      cover_photo,
      author,
      publisher,
      publish_date,
      category,
      info,
    };
    await dispatch(createBooks(newBooks));
    await dispatch(fetchBooks());
    setName('');
    setImage('');
    setAuthor('');
    setPublisher('');
    setDate('');
    setCategory('');
    setInfo('');
  };


export default BookForm;
