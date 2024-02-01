import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateRole } from '../../redux/userSlice';
import SideNav from '../Navbar/navbar';

function Update() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    await dispatch(updateRole({ email }));
    toast.success('User has been verified');
    setEmail('');
  };

  return (
    <>
      <SideNav />
      <div className="centered-container">
        <form className="input" onSubmit={handleVerify}>
          <div className="mb-3 text-center">
            <h1>Give User Permission</h1>
            <p> If you wish to turn a user into an admin, please add their email bellow. </p>
          </div>
          <div className="mb-3">
            <input
              className="input-text form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="User email"
              required
            />
          </div>
          <button type="submit" className="form-btn">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Update;
