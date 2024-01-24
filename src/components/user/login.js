import React, { useState, useEffect } from 'react';
import '../../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { loginUser } from '../../redux/user/userSlice';

const Login = ({ onClose }) => {
  const { isLoggedIn } = useSelector((state) => state.users);
  const showModal = useSelector((state) => state.modal.showModal);

  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const resetData = () => {
    setLoginEmail('');
    setLoginPassword('');
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/mainpage');
      resetData();
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: loginEmail,
        password: loginPassword,
      },
    };
    try {
      await dispatch(loginUser(data));
    } catch (error) {
      toast.error(`Sign In Error: ${error.message}`);
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
            <h3>Login!</h3>
            <form className="login-form">
              <input
                className="input-text"
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <br />
              <input
                className="input-text"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <br />
              <input type="submit" value="Login" className="btn2" onClick={handleLogin} />
              <input type="button" value="Cancel" className="btn2" onClick={handleCancelLogout} />
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
