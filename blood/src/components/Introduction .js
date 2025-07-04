import React from "react";

const Introduction = () => {
  return (
    <div className="container mt-5">
      {/* Introduction Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
       
          <h2 className="card-title text-danger">Introduction</h2>
          <p>
            Welcome to our project! This system is designed to help users easily
            access information about our services. It provides a seamless
            experience with an intuitive interface to navigate through different
            features of the application. It is an innovative platform developed
            to connect blood donors with patients and hospitals in need of
            life-saving blood. It serves as a bridge between willing donors and
            recipients by providing an organized and efficient system to manage
            blood donation activities. The portal allows donors to register,
            track their eligibility, and receive reminders, while recipients can
            search for available donors based on blood type, location, and
            urgency. By simplifying the process of finding and contacting
            donors, this portal not only saves valuable time during emergencies
            but also promotes awareness about the importance of regular blood
            donation. It aims to foster a sense of community and responsibility,
            making the act of donating blood easier, faster, and more impactful.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/intro.jpg"
            alt="Introduction"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Conditions Section */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
   
          <h2 className="card-title text-danger">Condition</h2>
          <p>
            In Nepal, the current condition of blood supply is facing
            significant challenges, with frequent shortages reported across the
            country. Major blood banks in districts like Kavrepalanchok,
            Nawalparasi, Banke, and Kailali often run out of stock, forcing
            hospitals to rely on last-minute donations from family members or
            volunteers, which can delay critical treatments. Demand for blood
            has been rising due to increasing numbers of surgeries, accidents,
            and diseases like dengue, while regular donations remain low because
            of seasonal factors, lack of awareness, and the outmigration of
            young donors. Rural areas are particularly vulnerable, as many
            districts still lack proper blood bank facilities, leaving patients
            with no option but to depend on ad-hoc donations or travel long
            distances in emergencies. This mismatch between demand and supply
            highlights the urgent need for better awareness, more organized
            donation drives, and improved infrastructure. A systematic approach,
            such as an online blood donation portal, could help address these
            issues by connecting donors and recipients efficiently and ensuring
            timely availability of blood throughout Nepal.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/condition1.jpg"
            alt="Conditions"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Objectives Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="card-title text-danger">Objectives</h2>

          <ul>
            <li>
              To address the critical blood shortages in Nepal by creating a
              centralized and reliable platform for blood donation.
            </li>
            <li>
              To connect willing donors with patients and healthcare facilities
              quickly and efficiently, especially during emergencies.
            </li>
            <li>
              To promote awareness about the importance of regular blood
              donation and encourage more people to donate.
            </li>
            <li>
              To simplify the process of finding and contacting donors based on
              blood type, location, and urgency.
            </li>
            <li>
              To help reduce delays and save lives by providing real-time
              information about available donors and blood stock.
            </li>
            <li>
              To ensure equitable access to blood in rural and remote areas of
              Nepal where blood bank infrastructure is lacking.
            </li>
            <li>
              To build a strong, active community of verified and informed
              donors ready to support during critical situations.
            </li>
            <li>
              To improve the overall efficiency, transparency, and trust in the
              blood donation and supply system of Nepal.
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="/images/objective2.jpg"
            alt="Objectives"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
