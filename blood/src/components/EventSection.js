// import React from 'react';

// const events = {
//   upcoming: [
//     {
//       title: 'Blood Donation Camp - Kathmandu',
//       date: '2025-08-12',
//       location: 'Basantapur Durbar Square, Kathmandu',
//     },
//     {
//       title: 'Health Awareness & Blood Drive - Pokhara',
//       date: '2025-09-05',
//       location: 'Lakeside, Pokhara',
//     },
//   ],
//   past: [
//     {
//       title: 'Red Cross Blood Donation - Lalitpur',
//       date: '2025-06-20',
//       location: 'Jawalakhel Ground, Lalitpur',
//     },
//     {
//       title: 'Community Health & Blood Donation - Biratnagar',
//       date: '2025-05-15',
//       location: 'Biratnagar City Hall, Biratnagar',
//     },
//   ]
// };

// const EventSection = () => {
//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Events in Nepal</h2>

//       {/* Upcoming Events */}
//       <div className="mb-5">
//         <h4 className="text-primary">Upcoming Events</h4>
//         <div className="row">
//           {events.upcoming.map((event, index) => (
//             <div className="col-md-6" key={index}>
//               <div className="card mb-3 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{event.title}</h5>
//                   <p className="card-text">
//                     📅 <strong>Date:</strong> {event.date}<br />
//                     📍 <strong>Location:</strong> {event.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Past Events */}
//       <div>
//         <h4 className="text-secondary">Past Events</h4>
//         <div className="row">
//           {events.past.map((event, index) => (
//             <div className="col-md-6" key={index}>
//               <div className="card mb-3 border-light">
//                 <div className="card-body">
//                   <h5 className="card-title">{event.title}</h5>
//                   <p className="card-text">
//                     📅 <strong>Date:</strong> {event.date}<br />
//                     📍 <strong>Location:</strong> {event.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default EventSection;




import React, { useState, useEffect } from "react";
import { Card, Button, Badge, ProgressBar, ListGroup, Image } from "react-bootstrap";

const EventSection = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      title: "City Blood Donation Camp",
      date: "2025-07-25T10:00:00",
      venue: "Community Hall, Kathmandu",
      quota: 50,
      registered: 32,
      mapLink: "https://goo.gl/maps/abcd1234",
    },
    {
      id: 2,
      title: "World Donor Day Special Drive",
      date: "2025-08-14T09:00:00",
      venue: "City Square, Lalitpur",
      quota: 100,
      registered: 77,
      mapLink: "https://goo.gl/maps/wxyz5678",
    },
  ];

  const pastEvents = [
    { id: 1, title: "Emergency Flood Relief Drive", collected: 78, image: "/past1.jpg" },
    { id: 2, title: "Annual Health Camp 2024", collected: 120, image: "/past2.jpg" },
  ];

  const volunteersNeeded = ["Registration Desk", "Logistics Helper", "Social Media", "First Aid"];

  useEffect(() => {
    const nextEventTime = new Date(upcomingEvents[0].date).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, nextEventTime - now);
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000);
    const d = Math.floor(sec / (3600 * 24));
    const h = Math.floor((sec % (3600 * 24)) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🩸 Blood Donation Events</h2>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Next Event Countdown</Card.Title>
          <Card.Text>
            <strong>{upcomingEvents[0].title}</strong> starts in:
          </Card.Text>
          <h4 className="text-danger">{formatTime(timeLeft)}</h4>
        </Card.Body>
      </Card>

      <h4>📌 Upcoming Events</h4>
      <div className="row">
        {upcomingEvents.map((event) => (
          <div className="col-md-6 mb-3" key={event.id}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {event.title}{" "}
                  {event.registered >= event.quota ? (
                    <Badge bg="secondary">Fully Booked</Badge>
                  ) : (
                    <Badge bg="success">Few Spots Left</Badge>
                  )}
                </Card.Title>
                <Card.Text>
                  📅 {new Date(event.date).toLocaleString()} <br />
                  📍 <a href={event.mapLink}>View on Map</a> <br />
                  Donors: {event.registered}/{event.quota}
                </Card.Text>
                <ProgressBar now={(event.registered / event.quota) * 100} label={`${Math.round((event.registered / event.quota) * 100)}%`} />
                <Button className="mt-2">Register Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <h4 className="mt-4">⭐ Past Events</h4>
      <div className="row">
        {pastEvents.map((event) => (
          <div className="col-md-6 mb-3" key={event.id}>
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>Blood Units Collected: {event.collected}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title>🚨 Emergency Need</Card.Title>
          <Card.Text>
            We urgently need <strong>O- blood</strong> at City Hospital. Please contact us at <a href="tel:+977123456789">+977 123456789</a> if you can help.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mb-5">
        <p>
          Follow us on
          <a href="#"> Facebook</a>, <a href="#"> Instagram</a> for live updates and more.
        </p>
      </div>
    </div>
  );
};

export default EventSection;
