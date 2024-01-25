import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../redux/userSlice';

function Verify() {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const userId = useSelector((state) => state.users.user.id);

  const handleVerify = async (e) => {
    e.preventDefault();

    await dispatch(verifyUser({ password: token, userId }));
    setToken('');
  };

  return (
    <form>
      <input
        className="input-text"
        type="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="pass"
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
