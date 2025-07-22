import React, { useState } from 'react';
import './BecomeMember.css';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendarAlt, FaWeight, FaHeart, FaCheck, FaShareAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BecomeMember = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    bloodType: '',
    weight: '',
    lastDonation: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    privacyAccepted: false,
    donationType: 'whole',
    preferredCenter: '',
    availability: '',
    notifications: true,
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } 
    else if (step === 2) {
      if (!formData.weight || formData.weight < 50) newErrors.weight = 'Minimum 50kg required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitted(true);
      // Here you would typically send data to your backend
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="become-member-container">
      {!isSubmitted ? (
        <div className="member-form-wrapper">
          <div className="form-header">
            <h2>Become a Blood Donor</h2>
            <p>Join our community and save lives!</p>
          </div>

          <div className="progress-container">
            <div className="progress-steps">
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber} 
                  className={`step ${step >= stepNumber ? 'active' : ''}`}
                >
                  <div className="step-number">{stepNumber}</div>
                  <div className="step-label">
                    {stepNumber === 1 && 'Personal'}
                    {stepNumber === 2 && 'Health'}
                    {stepNumber === 3 && 'Preferences'}
                  </div>
                </div>
              ))}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="donor-form">
            {step === 1 && (
              <div className="form-step">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className={`form-group ${errors.fullName ? 'error' : ''}`}>
                    <label>Full Name</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className={`form-group ${errors.dob ? 'error' : ''}`}>
                    <label>Date of Birth</label>
                    <div className="input-with-icon">
                      <FaCalendarAlt className="input-icon" />
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.dob && <span className="error-message">{errors.dob}</span>}
                  </div>

                  <div className={`form-group ${errors.gender ? 'error' : ''}`}>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <span className="error-message">{errors.gender}</span>}
                  </div>

                  <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label>Email</label>
                    <div className="input-with-icon">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                    <label>Phone Number</label>
                    <div className="input-with-icon">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1234567890"
                      />
                    </div>
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your full address"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h3>Health Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Blood Type</label>
                    <select
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                    >
                      <option value="">Select Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div className={`form-group ${errors.weight ? 'error' : ''}`}>
                    <label>Weight (kg)</label>
                    <div className="input-with-icon">
                      <FaWeight className="input-icon" />
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        min="50"
                        placeholder="Minimum 50kg"
                      />
                    </div>
                    {errors.weight && <span className="error-message">{errors.weight}</span>}
                  </div>

                  <div className="form-group">
                    <label>Last Donation Date (if any)</label>
                    <input
                      type="date"
                      name="lastDonation"
                      value={formData.lastDonation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      I have never had HIV/AIDS
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      I have never had Hepatitis B/C
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      I don't have heart disease
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h3>Donation Preferences</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Preferred Donation Type</label>
                    <select
                      name="donationType"
                      value={formData.donationType}
                      onChange={handleChange}
                    >
                      <option value="whole">Whole Blood</option>
                      <option value="plasma">Plasma</option>
                      <option value="platelets">Platelets</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Donation Center</label>
                    <input
                      type="text"
                      name="preferredCenter"
                      value={formData.preferredCenter}
                      onChange={handleChange}
                      placeholder="Nearest blood bank"
                    />
                  </div>

                  <div className="form-group">
                    <label>Availability</label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="e.g., Weekends, Evenings"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleChange}
                      />
                      I want to receive notifications about blood requests
                    </label>
                  </div>

                  <div className="form-group full-width terms-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                      />
                      I agree to the Terms & Conditions
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                      />
                      I accept the Privacy Policy
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="form-navigation">
              {step > 1 && (
                <button type="button" onClick={handlePrev} className="nav-button prev-button">
                  <FaArrowLeft /> Back
                </button>
              )}
              
              {step < 3 ? (
                <button type="button" onClick={handleNext} className="nav-button next-button">
                  Next <FaArrowRight />
                </button>
              ) : (
                <button type="submit" className="nav-button submit-button">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="success-container">
          <div className="success-icon">
            <FaHeart />
          </div>
          <h2>Thank You for Registering!</h2>
          <p>You're now part of our life-saving community. We'll contact you soon.</p>
          
          <div className="success-actions">
            <button className="action-button download-card">
              Download Donor Card
            </button>
            <button className="action-button schedule-donation">
              Schedule First Donation
            </button>
            <button className="action-button share">
              <FaShareAlt /> Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeMember;