import React, { useState } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import Login from './user/login';

const Splash = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  const handleLogin = () => {
    setLoginModalOpen(true);
    //  navigate('/login');
  };
  const handleSginup = () => {
    navigate('/signup');
  };
  return (
    <div className="auth-body">

      <div className="login-container">
        <>
          {' '}
          <button type="button" className="btn" onClick={handleLogin}>log in</button>
          {isLoginModalOpen && <Login onClose={closeLoginModal} />}
        </>
        <button type="button" className="btn" onClick={handleSginup}>sign up</button>
      </div>
    </div>
  );
};

export default Splash;
