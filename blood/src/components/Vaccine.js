// src/pages/Vaccine.js

import React from 'react';

const Vaccine = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Vaccination Information</h2>
      <p>
        Vaccination plays a crucial role in ensuring donor health and safety. Here is some useful information about vaccination guidelines for blood donors:
      </p>

      <ul className="mt-3">
        <li><strong>COVID-19 Vaccine:</strong> Wait at least 14 days after vaccination before donating blood.</li>
        <li><strong>Hepatitis B:</strong> Permanent deferral unless vaccinated as part of a medical requirement.</li>
        <li><strong>Flu Vaccine:</strong> Wait 24 hours if no side effects; else wait till recovered.</li>
        <li><strong>Others:</strong> Check with donation centers for updated waiting periods for other vaccines.</li>
      </ul>

      <p className="mt-3">
        Always consult with a certified blood center before planning your donation after any vaccination.
      </p>
    </div>
  );
};

export default Vaccine;
