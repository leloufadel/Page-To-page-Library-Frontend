import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import Splach from './components/Splach';
import Login from './components/user/login';
import Signup from './components/user/sighnup';
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Splach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/books/:name" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
