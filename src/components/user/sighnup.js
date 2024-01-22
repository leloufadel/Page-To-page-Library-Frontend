import React, { useState } from 'react';
import '../../stylesheets/login.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/userSlice'; // تحديث باستخدام الأفعال الفعلية

const Signup = () => {
  const dispatch = useDispatch();

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

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

  return (
    <div className="container">
      <div className="sm-card">
        <h3>Sign Up!</h3>
        <form onSubmit={onSignUp} className="sign-up-form">
          <input
            className="sign-up-form-input"
            type="text"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
            placeholder="Name"
          />
          <br />
          <input
            className="sign-up-form-input"
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            className="sign-up-form-input"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Sign up" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
