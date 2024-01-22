import React, { useState } from 'react';
import '../../stylesheets/login.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/user/userSlice'; // تحديث باستخدام الأفعال الفعلية

const Signup = ({ onClose }) => {
  const dispatch = useDispatch();

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const showModal = useSelector((state) => state.modal.showModal);

  const resetData = () => {
    setSignUpName('');
    setSignUpEmail('');
    setSignUpPassword('');
  };

  const onSignUp = (event) => {
    event.preventDefault();
    const data = {
      user: {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
      },
    };
    try {
      dispatch(registerUser(data));
      resetData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelLogout = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
      <div className="modal-overlay">
        <div className="logout-modal add-pading">
          <h3>Sign Up!</h3>
          <form onSubmit={onSignUp} className="sign-up-form">
            <input
              className="input-text"
              type="text"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              placeholder="Name"
            />
            <br />
            <input
              className="input-text"
              type="email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              className="input-text"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Sign up" className="btn2" />
            <button type="button" onClick={handleCancelLogout} className="btn2">
              Cancel
            </button>
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
