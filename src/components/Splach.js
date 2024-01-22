import React, { useState } from 'react';
import '../stylesheets/login.css';
import Login from './user/login';
import Signup from './user/sighnup';

const Splach = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    setSignUpModalOpen(false);
  };
  const handleLogin = () => {
    setLoginModalOpen(true);
  };
  const handleSginup = () => {
    setSignUpModalOpen(true);
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
        {isSignUpModalOpen && <Signup onClose={closeLoginModal} />}
      </div>
    </div>
  );
};
export default Splach;
