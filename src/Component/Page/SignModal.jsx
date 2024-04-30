import React, { useState, useEffect } from 'react';

const SignupModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setSignedUp(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save signup data to local storage
    const userData = {
      email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    // Close the modal after signup
    setSignedUp(true);
    setEmail('');
    setPassword('');
  };

  const handleTogglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  if (signedUp) {
    return null; // Return nothing if signed up successfully
  }

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isLoginPage ? 'Login' : 'Sign Up'}</h5>
            <button type="button" className="btn btn-success" onClick={handleTogglePage}>
              {isLoginPage ? 'Sign Up' : 'Login'}
            </button>
          </div>
          <div className="modal-body">
            {isLoginPage ? (
              <form>
                <div className="form-group my-4">
                  <label htmlFor="loginEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-4">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group my-4">
                  <label htmlFor="signupName">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="signupName"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group my-4">
                  <label htmlFor="signupEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="signupEmail"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-4">
                  <label htmlFor="signupPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="signupPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
