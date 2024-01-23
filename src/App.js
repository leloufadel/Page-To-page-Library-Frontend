import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import Splash from './components/Splash';
import BookDetail from './components/BookDetail';
import MainPage from './components/MainPage';
import './App.css';
import Logout from './components/user/logout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/mainpage');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/logout" element={<Logout onClose={handleClose} />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
