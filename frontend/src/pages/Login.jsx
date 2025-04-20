import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', name: '', password: '' });

  // Handle changes
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleRegisterChange = (e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  // Submit Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);
      alert(response.data.message);
      setLoginData({ username: '', password: '' });
    } catch (error) {
      alert("Login failed");
    }
  };

  // Submit Register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', registerData);
      alert(response.data.message);
      setRegisterData({ email: '', name: '', password: '' });
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="customer_login">
      <div className="row">

        {/* Login Form */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-item">
            <h5 className="title-login">Login your Account</h5>
            <form className="login" onSubmit={handleLoginSubmit}>
              <p className="form-row form-row-wide">
                <label className="text">Username</label>
                <input name="username" type="text" className="input-text" value={loginData.username} onChange={handleLoginChange} />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Password</label>
                <input name="password" type="password" className="input-text" value={loginData.password} onChange={handleLoginChange} />
              </p>
              <p className="form-row">
                <input type="submit" className="button-submit" value="Login" />
              </p>
            </form>
          </div>
        </div>

        {/* Register Form */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-item">
            <h5 className="title-login">Register now</h5>
            <form className="register" onSubmit={handleRegisterSubmit}>
              <p className="form-row form-row-wide">
                <label className="text">Your email</label>
                <input name="email" type="email" className="input-text" value={registerData.email} onChange={handleRegisterChange} required  />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Username</label>
                <input name="name" type="text" className="input-text" value={registerData.name} onChange={handleRegisterChange} required />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Password</label>
                <input name="password" type="password" className="input-text" value={registerData.password} onChange={handleRegisterChange} required />
              </p>
              <p>
                <input type="submit" className="button-submit" value="Register Now" />
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
