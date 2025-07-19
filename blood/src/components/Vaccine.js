// import React from "react";
// import { Card, Accordion, Image, Row, Col } from "react-bootstrap";
// import "./VaccineInfo.css"; // custom styles

// const VaccineInfo = () => {
//   return (
//     <div className="container mt-4 vaccine-info">
//       <h2 className="text-center mb-4 text-primary">Vaccine Information</h2>

//       {/* Banner */}
//       <div className="text-center mb-4">
//         <Image
//           src="https://www.who.int/images/default-source/health-topics/vaccines/vaccine-syringe.jpg"
//           alt="Vaccination"
//           fluid
//           rounded
//           className="banner-img"
//         />
//       </div>

//       {/* Side-by-Side Section */}
//       <Row className="mb-4">
//         <Col md={6} className="mb-3">
//           <Card className="shadow-sm h-100">
//             <Card.Body>
//               <Card.Title>Why is Vaccination Important?</Card.Title>
//               <Card.Text>
//                 Vaccines protect you and your community by preventing dangerous diseases. 
//                 Staying up-to-date with your vaccines helps you stay healthy and keeps 
//                 others safe too — especially newborns, the elderly, and people with weak immunity.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6} className="mb-3">
//           <Card className="shadow-sm h-100">
//             <Card.Body>
//               <Card.Title>Common Vaccines</Card.Title>
//               <ul>
//                 <li>Hepatitis B</li>
//                 <li>Tetanus & Diphtheria (Tdap)</li>
//                 <li>Influenza (Flu)</li>
//                 <li>COVID-19</li>
//                 <li>Measles, Mumps, Rubella (MMR)</li>
//                 <li>HPV</li>
//                 <li>Polio</li>
//                 <li>Chickenpox (Varicella)</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Vaccine & Blood Donation */}
//       <Row className="mb-4">
//         <Col md={6} className="mb-3">
//           <Card className="shadow-sm h-100">
//             <Card.Body>
//               <Card.Title>Vaccines & Blood Donation</Card.Title>
//               <Card.Text>
//                 Many vaccines allow you to donate blood immediately, while others may require a short waiting period:
//               </Card.Text>
//               <ul>
//                 <li>Flu & COVID-19 — usually okay the same day or after 1–2 days.</li>
//                 <li>Live vaccines (like MMR, Chickenpox) — wait 2–4 weeks.</li>
//                 <li>If unsure, check with your blood bank or doctor.</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6} className="mb-3">
//           <Card className="shadow-sm h-100">
//             <Card.Body>
//               <Card.Title>Useful Links</Card.Title>
//               <ul>
//                 <li>
//                   <a href="https://www.who.int" target="_blank" rel="noopener noreferrer">
//                     World Health Organization
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.cdc.gov/vaccines/index.html" target="_blank" rel="noopener noreferrer">
//                     CDC Vaccine Info
//                   </a>
//                 </li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* FAQs */}
//       <Card className="mb-4 shadow-sm">
//         <Card.Body>
//           <Card.Title>Frequently Asked Questions</Card.Title>
//           <Accordion flush>
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>Can I donate blood after getting vaccinated?</Accordion.Header>
//               <Accordion.Body>
//                 Yes, for most vaccines you can donate right away. Some live vaccines require a short waiting period.
//               </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="1">
//               <Accordion.Header>Do vaccines affect blood quality?</Accordion.Header>
//               <Accordion.Body>
//                 No. Vaccines do not harm your blood quality. They keep you healthy and eligible to donate.
//               </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="2">
//               <Accordion.Header>Where can I get vaccinated?</Accordion.Header>
//               <Accordion.Body>
//                 Vaccines are available at hospitals, health centers, and during vaccination camps near you.
//               </Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default VaccineInfo;


import React from "react";
import { Card, Accordion, Image, Row, Col } from "react-bootstrap";
import "./VaccineInfo.css";

const VaccineInfo = () => {
  return (
    <div className="container mt-4 vaccine-info">
      <h2 className="text-center mb-4 text-primary">Vaccine Information</h2>

      {/* Banner */}
      <div className="text-center mb-4">
        <Image
          src="https://www.who.int/images/default-source/health-topics/vaccines/vaccine-syringe.jpg"
          alt="Vaccination"
          fluid
          rounded
          className="banner-img"
        />
      </div>

      {/* Diagonal Sections */}
      {/* Section 1 */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/02/24/18/27/vaccine-6041753_1280.jpg"
            alt="Why Vaccination"
            fluid
            className="section-img"
          />
        </Col>
        <Col md={6}>
          <Card className="shadow-sm glass-card">
            <Card.Body>
              <Card.Title>Why is Vaccination Important?</Card.Title>
              <Card.Text>
                Vaccines protect you and your community by preventing dangerous diseases. 
                Staying up-to-date with your vaccines helps you stay healthy and keeps 
                others safe too — especially newborns, the elderly, and people with weak immunity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 2 */}
      <Row className="mb-4 flex-md-row-reverse align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/02/25/14/51/vaccine-6044521_1280.jpg"
            alt="Common Vaccines"
            fluid
            className="section-img"
          />
        </Col>
        <Col md={6}>
          <Card className="shadow-sm glass-card">
            <Card.Body>
              <Card.Title>Common Vaccines</Card.Title>
              <ul>
                <li>Hepatitis B</li>
                <li>Tetanus & Diphtheria (Tdap)</li>
                <li>Influenza (Flu)</li>
                <li>COVID-19</li>
                <li>Measles, Mumps, Rubella (MMR)</li>
                <li>HPV</li>
                <li>Polio</li>
                <li>Chickenpox (Varicella)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 3 */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/02/25/12/04/vaccine-6044081_1280.jpg"
            alt="Vaccines & Blood Donation"
            fluid
            className="section-img"
          />
        </Col>
        <Col md={6}>
          <Card className="shadow-sm glass-card">
            <Card.Body>
              <Card.Title>Vaccines & Blood Donation</Card.Title>
              <Card.Text>
                Many vaccines allow you to donate blood immediately, while others may require a short waiting period:
              </Card.Text>
              <ul>
                <li>Flu & COVID-19 — usually okay the same day or after 1–2 days.</li>
                <li>Live vaccines (like MMR, Chickenpox) — wait 2–4 weeks.</li>
                <li>If unsure, check with your blood bank or doctor.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 4 */}
      <Row className="mb-4 flex-md-row-reverse align-items-center">
        <Col md={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/02/26/12/47/vaccine-6047050_1280.jpg"
            alt="Useful Links"
            fluid
            className="section-img"
          />
        </Col>
        <Col md={6}>
          <Card className="shadow-sm glass-card">
            <Card.Body>
              <Card.Title>Useful Links</Card.Title>
              <ul>
                <li>
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer">
                    World Health Organization
                  </a>
                </li>
                <li>
                  <a href="https://www.cdc.gov/vaccines/index.html" target="_blank" rel="noopener noreferrer">
                    CDC Vaccine Info
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQs */}
      <Card className="mb-4 shadow-sm glass-card">
        <Card.Body>
          <Card.Title>Frequently Asked Questions</Card.Title>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Can I donate blood after getting vaccinated?</Accordion.Header>
              <Accordion.Body>
                Yes, for most vaccines you can donate right away. Some live vaccines require a short waiting period.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do vaccines affect blood quality?</Accordion.Header>
              <Accordion.Body>
                No. Vaccines do not harm your blood quality. They keep you healthy and eligible to donate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where can I get vaccinated?</Accordion.Header>
              <Accordion.Body>
                Vaccines are available at hospitals, health centers, and during vaccination camps near you.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VaccineInfo;
