import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/user/userSlice';

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);

  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    dispatch(logoutUser());
    navigate('/');
    onClose();
  };

  const handleCancelLogout = () => {
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-style ">
            <p>Are you sure you want to logout?</p>
            <button type="button" onClick={handleConfirmLogout} className="btn2">Ok</button>
            <button type="button" onClick={handleCancelLogout} className="btn2">Cancel</button>
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
