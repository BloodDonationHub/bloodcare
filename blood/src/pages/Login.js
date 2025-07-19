import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '') return;
    login({ username });
    if (closeModal) {
      closeModal();
    } else {
      navigate('/');
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth
    alert("Google Login Coming Soon!");
  };

  return (
    <div className="p-4 rounded shadow-sm" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h3 className="text-center mb-4">Welcome Back 👋</h3>

      {/* Google Login */}
      <button
        className="btn btn-light w-100 border d-flex align-items-center justify-content-center gap-2 mb-3"
        onClick={handleGoogleLogin}
      >
        <FcGoogle size={20} />
        Continue with Google
      </button>

      <div className="d-flex align-items-center my-3">
        <hr className="flex-grow-1" />
        <span className="px-2 text-muted">OR</span>
        <hr className="flex-grow-1" />
      </div>

      {/* Email Form */}
      <div className="form-group text-start mb-2">
        <label htmlFor="username">Email or Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="btn btn-primary w-100 mt-2"
      >
        Continue with Email
      </button>

      {/* Optional: Close button for modal */}
      {closeModal && (
        <button
          onClick={closeModal}
          className="btn btn-link w-100 mt-3 text-muted"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default Login;
