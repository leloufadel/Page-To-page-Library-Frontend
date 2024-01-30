import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../../redux/userSlice';

function Verify() {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    await dispatch(verifyUser({ token }));
    setToken('');
  };

  return (
    <div className="centered-container">
      <form className="input" onSubmit={handleVerify}>
        <div className="mb-3 text-center">
          <h1>Verify User</h1>
          <p> Enter your JWT token to verify yourself. </p>
          <p> You can get your token from the Local Storage! </p>
        </div>
        <div className="mb-3">
          <input
            className="input-text"
            type="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="JWT token"
            required
          />
        </div>
        <button type="submit" className="form-btn">
          Verify
        </button>
      </form>
    </div>
  );
}

export default Verify;
