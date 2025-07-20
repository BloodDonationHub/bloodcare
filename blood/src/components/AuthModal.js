import React, { useState } from 'react';
import './AuthModal.css';
import { useAuth } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const AuthModal = ({ onClose }) => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true); // true = Login | false = Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: email }); // Simulate login
    onClose();
  };

  const handleGoogleLogin = () => {
    alert('Google login coming soon...');
  };

  return (
    <div className="auth-modal-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h3 className="text-center mb-3">
          {isLogin ? 'Welcome Back 👋' : 'Create Your Account'}
        </h3>

        {/* Google Login */}
        <button
          className="btn btn-light w-100 border d-flex align-items-center justify-content-center gap-2 mb-3"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="d-flex align-items-center my-2">
          <hr className="flex-grow-1" />
          <span className="px-2 text-muted">OR</span>
          <hr className="flex-grow-1" />
        </div>

        {/* Email Login/Signup Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-2">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              className="btn btn-link p-0"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
