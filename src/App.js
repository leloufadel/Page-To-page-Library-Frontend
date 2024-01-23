import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import Splash from './components/Splash';
import BookDetail from './components/BookDetail';
import MainPage from './components/MainPage';
import './App.css';
import Logout from './components/user/logout';
import Home from './components/Home/home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/home');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/logout" element={<Logout onClose={handleClose} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/books/:name" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
