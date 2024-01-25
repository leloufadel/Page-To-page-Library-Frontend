import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../../redux/userSlice';

function Verify() {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();

    await dispatch(verifyUser(token));
    setToken('');
  };

  return (
    <form>
      <input
        className="input-text"
        type="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="token"
        required
      />
      <br />
      <button type="submit" onClick={handleVerify} className="form-btn">
        Verify
      </button>
    </form>
  );
}

export default Verify;
