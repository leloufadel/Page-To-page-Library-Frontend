import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BookList from './components/BookList';
import { getBooks } from './redux/bookSlice';
import SideNav from './components/Navbar/navbar';
import Login from './components/login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });

  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
