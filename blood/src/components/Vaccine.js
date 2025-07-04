// import React from 'react';

// function Vaccine() {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-primary mb-4">Vaccine Information</h2>

//       <section className="mb-5">
//         <h4>What is a Vaccine?</h4>
//         <p>
//           A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. 
//           It typically contains an agent resembling a disease-causing microorganism and is often made from weakened or killed forms 
//           of the microbe, its toxins, or one of its surface proteins.
//         </p>
//       </section>

//       <section className="mb-5">
//         <h4>Types of Vaccines</h4>
//         <ul>
//           <li><strong>mRNA Vaccines:</strong> Teach cells how to make a protein that triggers an immune response (e.g., Pfizer, Moderna).</li>
//           <li><strong>Viral Vector Vaccines:</strong> Use a modified virus to deliver genetic material (e.g., AstraZeneca, Johnson & Johnson).</li>
//           <li><strong>Inactivated Vaccines:</strong> Contain killed virus particles to stimulate immunity (e.g., Covaxin, Sinopharm).</li>
//           <li><strong>Protein Subunit Vaccines:</strong> Use pieces of the virus to stimulate an immune response.</li>
//         </ul>
//       </section>

//       <section className="mb-5">
//         <h4>Benefits of Getting Vaccinated</h4>
//         <ol>
//           <li>Reduces the risk of infection and severe illness.</li>
//           <li>Protects your family and community (herd immunity).</li>
//           <li>Helps prevent the spread of infectious diseases.</li>
//           <li>Contributes to ending pandemics more quickly.</li>
//         </ol>
//       </section>

//       <section className="mb-5">
//         <h4>Before You Get Vaccinated</h4>
//         <ul>
//           <li>Make sure you're not currently sick or recently exposed to COVID-19.</li>
//           <li>Bring a valid ID and your previous vaccine card (if any).</li>
//           <li>Wear a mask and follow safety protocols at the vaccination center.</li>
//         </ul>
//       </section>

//       <div className="text-center">
//         <a href="/booking" className="btn btn-primary btn-lg">Book Your Vaccine Appointment</a>
//       </div>
//     </div>
//   );
// }

// export default Vaccine;


import React from "react";

const bloodBanks = [
  {
    name: "NRCS Regional BTSC",
    district: "Banke, Nepalgunj",
    contact: "081 – 520174",
  },
  {
    name: "NRCS Regional BTSC",
    district: "Bharatpur, Chitwan",
    contact: "056 – 520880",
  },
  {
    name: "NRCS Regional BTSC",
    district: "Pokhara, Kaski",
    contact: "061 – 521091, 061 – 540191",
  },
  {
    name: "NRCS Regional BTSC",
    district: "Rangeli Road, Biratnagar",
    contact: "021 – 523326",
  },
  {
    name: "Dhulikhel Hospital",
    district: "Dhulikhel",
    contact: "011 – 490497",
  },
  {
    name: "Manipal Teaching Hospital",
    district: "Pokhara, Kaski",
    contact: "061–526416",
  },
  {
    name: "BP Koirala Memorial Cancer Hospital",
    district: "Bharatpur",
    contact: "056–524501",
  },
];

export default function BloodBanks() {
  return (
    <div className="container">
      <h2>Major Blood Banks Outside Kathmandu Valley</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name of the Blood Bank</th>
            <th>District/Place</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bank, index) => (
            <tr key={index}>
              <td>{bank.name}</td>
              <td>{bank.district}</td>
              <td>{bank.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
