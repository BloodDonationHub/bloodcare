import React, { useState } from 'react';

const EligibilityChecker = () => {
  const [answers, setAnswers] = useState({
    age: '',
    weight: '',
    recentDonation: '',
    illness: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = e => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const checkEligibility = () => {
    const { age, weight, recentDonation, illness } = answers;
    if (age === 'yes' && weight === 'yes' && recentDonation === 'no' && illness === 'no') {
      setResult("✅ You are likely eligible to donate blood!");
    } else {
      setResult("❌ You may not be eligible. Please consult your nearest blood bank.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-danger mb-4 text-center">🩸 Eligibility Checker</h2>

      <div className="mb-3">
        <label>Are you between 18 and 65 years old?</label>
        <select className="form-select" name="age" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Do you weigh more than 45 kg?</label>
        <select className="form-select" name="weight" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Have you donated blood in the past 3 months?</label>
        <select className="form-select" name="recentDonation" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Are you currently ill or taking medication?</label>
        <select className="form-select" name="illness" onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <button className="btn btn-danger w-100" onClick={checkEligibility}>
        Check Eligibility
      </button>

      {result && (
        <div className="alert alert-info mt-4 text-center">
          {result}
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;
