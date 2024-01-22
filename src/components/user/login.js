import React, { useState, useEffect } from 'react';
import '../../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/user/userSlice';

const Login = ({ onClose }) => {
  const { isLoggedIn = false } = useSelector((state) => state.users);
  const showModal = useSelector((state) => state.modal.showModal);

  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const navigate = useNavigate();

  const resetData = () => {
    setLoginEmail(null);
    setLoginPassword(null);
  };

  const onLogin = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      navigate('/home');
      resetData();
    }
  };
  useEffect(() => {
    const data = {
      user: {
        email: loginEmail,
        password: loginPassword,
      },
    };
    if (loginEmail != null && loginPassword != null) dispatch(loginUser(data));
  }, [onLogin]);

  const handleCancelLogout = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="logout-modal add-pading">
            <h3>Login!</h3>
            <form onSubmit={onLogin} className="login-form">
              <input
                className="input-text"
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              <input
                className="input-text"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Login" className="btn2" />
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

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Login;
