import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BookList from './components/BookList';
import { getBooks } from './redux/bookSlice';
import SideNav from './components/Navbar/navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  });

  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
