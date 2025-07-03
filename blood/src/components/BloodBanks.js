import React, { useState } from 'react';

const BloodBank = () => {
  const [search, setSearch] = useState('');

  const donors = [
    { name: 'Suman Tamang', bloodType: 'A+', location: 'Kathmandu' },
    { name: 'Anita Rai', bloodType: 'O-', location: 'Lalitpur' },
    { name: 'Bikash Shrestha', bloodType: 'B+', location: 'Pokhara' },
    { name: 'Deepa Magar', bloodType: 'AB+', location: 'Biratnagar' },
    // You can add more donor objects here
  ];

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.bloodType.toLowerCase().includes(search.toLowerCase()) ||
      donor.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🩸 Blood Bank</h2>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, blood type or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{donor.name}</h5>
                  <p className="card-text">
                    <strong>Blood Type:</strong> {donor.bloodType}<br />
                    <strong>Location:</strong> {donor.location}
                  </p>
                  <button className="btn btn-danger btn-sm">Request Blood</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-muted">No donors found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BloodBank;
