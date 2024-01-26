import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import Splash from './components/Splash';
import { getReservations } from './redux/reservationSlice';
import BookForm from './components/bookform';
import BookDetail from './components/BookDetail';
import MainPage from './components/MainPage';
import ReservationList from './components/Reservations/ReservationList';
import ReservationForm from './components/Reservations/ReservationForm';
import SideNav from './components/Navbar/navbar';
import DeleteBook from './components/DeleteBook';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getReservations());
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token || token == null) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/deletebook" element={<DeleteBook />} />
        <Route path="/myreservations" element={<ReservationList />} />
        <Route path="/newreservation" element={<ReservationForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
