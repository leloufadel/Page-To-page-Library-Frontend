import React, { useState, useEffect } from 'react';
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
          <div className="modal-style log-in-up">
            <h3>Login!</h3>
            <form className="log-form">
              <input
                className="form-control mb-3"
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                className="form-control mb-3"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="div-btns-form">
                <input type="submit" value="Login" className="form-btn mb-3" onClick={handleLogin} />
                <input type="button" value="Cancel" className="form-btn mb-3" onClick={handleCancelLogout} />
              </div>
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
