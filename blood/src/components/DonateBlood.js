import React, { useState } from 'react';

const donationCamps = [
  {
    day: 'Sunday',
    locations: [
      {
        name: 'NRCS Central Blood Bank, Bhrikuti Mandap',
        time: '7 AM to 7 PM',
        organizer: 'Blood Care',
        link: 'https://goo.gl/maps/97d2GukQwyjsfJxU8',
      },
      {
        name: 'Charumati Bihar, Chabahil',
        time: '11:30 AM to 3:30 PM',
        organizer: 'Blood Care - Chabahil Pashupati Sub-Chapter',
        link: 'https://goo.gl/maps/qfjQjrVzmqWw3Nx7A',
      },
      {
        name: 'Bhugol Park, New Road',
        time: '11 AM to 3 PM',
        organizer: 'Dev Corner Sewa Samiti',
        link: 'https://goo.gl/maps/AHYpprpgeLp7RMMF9',
      },
    ],
  },
  {
    day: 'Monday',
    locations: [
      {
        name: 'NRCS Central Blood Bank, Bhrikuti Mandap',
        time: '7 AM to 7 PM',
        organizer: 'Blood Care',
        link: 'https://goo.gl/maps/97d2GukQwyjsfJxU8',
      },
    ],
  },
  {
    day: 'Tuesday',
    locations: [
      {
        name: 'Lampokhari, Chabahil',
        time: '10 AM to 2 PM',
        organizer: 'Lions Club of Kathmandu Chabahil',
        link: 'https://goo.gl/maps/6HYkVZuhpGjBmvZXA',
      },
    ],
  },
];

const DonateBlood = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    age: '',
    weight: '',
    recentDonation: '',
    illness: '',
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkEligibility = () => {
    const { age, weight, recentDonation, illness } = form;
    if (age === 'yes' && weight === 'yes' && recentDonation === 'no' && illness === 'no') {
      setResult('✅ You are likely eligible to donate blood!');
    } else {
      setResult('❌ You may not be eligible. Please consult your nearest blood bank.');
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="text-danger">❤️ Donate Blood - Save Lives</h1>
        <p className="lead text-secondary">
          Contact your nearest Red Cross chapter to donate blood. Your one pint could save multiple lives!
        </p>
        <p className="fw-semibold">
          Join a fixed donation center or find a pop-up camp nearby. Organizing your own camp? Details below.
        </p>
      </div>

      {/* 🔘 Eligibility Checker Link */}
      <p className="text-center mt-4">
        ❓Not sure if you're eligible?{' '}
        <button className="btn btn-sm btn-outline-danger fw-bold" onClick={() => setShowModal(true)}>
          Check here first
        </button>
      </p>

      {/* ✅ Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered animate__animated animate__zoomIn" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">🩸 Eligibility Checker</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
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
                  <label>Have you donated blood in the last 3 months?</label>
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
                {result && (
                  <div className="alert alert-info text-center">{result}</div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button className="btn btn-danger" onClick={checkEligibility}>
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Donation Camps List */}
      {donationCamps.map((camp, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-primary border-bottom pb-2">{camp.day}</h3>
          <div className="row">
            {camp.locations.map((loc, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{loc.name}</h5>
                    <p className="card-text mb-1"><strong>Time:</strong> {loc.time}</p>
                    <p className="card-text"><strong>Organizer:</strong> {loc.organizer}</p>
                  </div>
                  <div className="card-footer bg-transparent border-top-0">
                    <a
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger w-100"
                    >
                      📍 View on Map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="alert alert-info text-center mt-5">
        Want to organize a blood donation camp with your organization or team? <br />
        <strong>Contact Nepal Red Cross Society</strong> to get started.
      </div>
    </div>
  );
};

export default DonateBlood;
