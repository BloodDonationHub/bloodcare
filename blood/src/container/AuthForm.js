import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const AuthForm = ({ darkMode, onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
    setAuthError('');
  };

  const validateForm = (isLogin) => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm(true)) return;
    
    setIsLoading(true);
    try {
      // Replace with actual API call
      const response = await mockLogin(formData.email, formData.password);
      onLoginSuccess(response.user);
      onClose();
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm(false)) return;
    
    setIsLoading(true);
    try {
      // Replace with actual API call
      const response = await mockSignup(formData);
      onLoginSuccess(response.user);
      onClose();
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock API functions - replace with real API calls
  const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          resolve({ user: { name: 'Test User', email } });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const mockSignup = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ user: { name: data.name, email: data.email } });
      }, 1000);
    });
  };

  return (
    <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
      <div className="modal-header">
        <h5 className="modal-title">Login / Signup</h5>
        <button 
          type="button" 
          className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} 
          onClick={onClose}
          disabled={isLoading}
        ></button>
      </div>
      <div className="modal-body">
        <div className="container">
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4 border-0">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'login' ? 'active' : ''} ${darkMode ? 'text-light' : 'text-dark'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'signup' ? 'active' : ''} ${darkMode ? 'text-light' : 'text-dark'}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </li>
          </ul>

          {/* Error Message */}
          {authError && (
            <div className="alert alert-danger" role="alert">
              {authError}
            </div>
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiMail />
                  </span>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${errors.password ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : 'Login'}
                </button>
              </div>
            </form>
          )}

          {/* Signup Form */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiUser />
                  </span>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiMail />
                  </span>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${errors.password ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <small className={`form-text ${darkMode ? 'text-light' : 'text-muted'}`}>
                  Must be at least 6 characters
                </small>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <span className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}>
                    <FiLock />
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={`input-group-text ${darkMode ? 'bg-secondary border-secondary' : ''}`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Signing up...
                    </>
                  ) : 'Sign Up'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;