import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import BookList from './components/BookList';
// import { getBooks } from './redux/bookSlice';
// import SideNav from './components/Navbar/navbar';
import Splach from './components/Splach';
import Login from './components/user/login';
import Signup from './components/user/sighnup';
import './App.css';
import Logout from './components/user/logout';
import Home from './components/Home/home';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBooks());
  // });

  return (
    <>
      {/* <SideNav /> */}
      <Routes>
        <Route path="/" element={<Splach />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
