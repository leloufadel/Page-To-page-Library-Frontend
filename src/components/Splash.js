import React, { useState } from 'react';
import '../stylesheets/user.css';
import Login from './user/login';
import Signup from './user/signup';

const Splash = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUPModalOpen] = useState(false);

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    setSignUPModalOpen(false);
  };
  const handleLogin = () => {
    setLoginModalOpen(true);
  };
  const handleSginup = () => {
    setSignUPModalOpen(true);
  };
  return (
    <div className="auth-body">

      <div className="login-container">
        <>
          {' '}
          <button type="button" className="form-btn" onClick={handleLogin}>log in</button>
          {isLoginModalOpen && <Login onClose={closeLoginModal} />}
        </>
        <button type="button" className="form-btn" onClick={handleSginup}>sign up</button>
        {isSignUpModalOpen && <Signup onClose={closeLoginModal} />}
      </div>
    </div>
  );
};

export default Splash;
