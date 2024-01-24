import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/userSlice';

const Logout = ({ onClose }) => {
  const { isLoggedIn } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleConfirmLogout = () => {
    dispatch(logoutUser());
    onClose();
  };

  const handleCancelLogout = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to logout?</p>
            <button type="button" onClick={handleConfirmLogout}>OK</button>
            <button type="button" onClick={handleCancelLogout}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

Logout.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Logout;
