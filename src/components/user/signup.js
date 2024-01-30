import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../redux/userSlice';

const Signup = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const showModal = useSelector((state) => state.modal.showModal);

  const resetData = () => {
    setSignUpName('');
    setSignUpEmail('');
    setSignUpPassword('');
  };

  const signin = (event) => {
    event.preventDefault();
    const data = {
      user: {
        email: signUpEmail,
        password: signUpPassword,
      },
    };
    dispatch(loginUser(data));
    navigate('/mainpage');
    resetData();
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    const data = {
      user: {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
      },
    };
    try {
      await dispatch(registerUser(data));
      signin(event);
    } catch (error) {
      toast.error('Sign up Error:', error);
    }
  };
  const handleCancelSignup = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
      <div className="modal-overlay">
        <div className="modal-style log-in-up">
          <h3>Sign Up!</h3>
          <form onSubmit={onSignUp} className="log-form">
            <input
              className="form-control mb-3"
              type="text"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              className="form-control mb-3"
              type="email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <div className="div-btns-form">
              <input type="submit" value="Sign up" className="form-btn" />
              <input type="button" value="Cancel" className="form-btn" onClick={handleCancelSignup} />
            </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
};

Signup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Signup;
