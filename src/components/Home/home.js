import React from 'react';
import { ToastContainer } from 'react-toastify';
import SideNav from '../Navbar/navbar';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => (
  <>
    <SideNav />
    <ToastContainer />
  </>
);
export default Home;
