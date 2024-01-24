import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import Splash from './components/Splash';
import { getReservations } from './redux/reservationSlice';
import BookDetail from './components/BookDetail';
import MainPage from './components/MainPage';
import ReservationList from './components/Reservations/ReservationList';
import ReservationForm from './components/Reservations/ReservationForm';
import Verify from './components/user/verify';
import './App.css';
import Logout from './components/user/logout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getReservations());
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
        <Route path="/myreservations" element={<ReservationList />} />
        <Route path="/newreservation" element={<ReservationForm />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
