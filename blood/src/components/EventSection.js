import React, { useState, useEffect } from "react";
import { 
  Card, 
  Button, 
  Badge, 
  ProgressBar, 
  ListGroup, 
  Image, 
  Container,
  Row,
  Col,
  Alert
} from "react-bootstrap";
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUsers,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTint,
  FaRegClock,
  FaRegCalendarCheck,
  FaHistory
} from "react-icons/fa";
import { MdEmergency, MdVolunteerActivism } from "react-icons/md";

const EventSection = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const upcomingEvents = [
    {
      id: 1,
      title: "City Blood Donation Camp",
      date: "2025-07-25T10:00:00",
      venue: "Community Hall, Kathmandu",
      quota: 50,
      registered: 32,
      mapLink: "https://goo.gl/maps/abcd1234",
      description: "Join our quarterly community blood drive. Refreshments and health checkups provided.",
      bloodTypes: ["O+", "O-", "A+", "B+"]
    },
    {
      id: 2,
      title: "World Donor Day Special Drive",
      date: "2025-08-14T09:00:00",
      venue: "City Square, Lalitpur",
      quota: 100,
      registered: 77,
      mapLink: "https://goo.gl/maps/wxyz5678",
      description: "Celebrate World Donor Day with us! Special gifts for all donors.",
      bloodTypes: ["All Types"]
    },
    {
      id: 3,
      title: "University Blood Drive",
      date: "2025-09-05T11:00:00",
      venue: "Tribhuvan University Campus",
      quota: 80,
      registered: 45,
      mapLink: "https://goo.gl/maps/efgh5678",
      description: "Exclusive for students and faculty members. Show your student ID.",
      bloodTypes: ["A+", "B+", "AB+"]
    }
  ];

  const pastEvents = [
    { 
      id: 1, 
      title: "Emergency Flood Relief Drive", 
      collected: 78, 
      image: "/past1.jpg",
      date: "2025-06-15",
      impact: "Helped 234 flood victims across 3 districts"
    },
    { 
      id: 2, 
      title: "Annual Health Camp 2024", 
      collected: 120, 
      image: "/past2.jpg",
      date: "2024-12-05",
      impact: "Screened 500+ donors and collected record donations"
    },
    { 
      id: 3, 
      title: "Corporate Challenge 2024", 
      collected: 95, 
      image: "/past3.jpg",
      date: "2024-10-20",
      impact: "15 companies participated in friendly competition"
    }
  ];

  const volunteersNeeded = [
    { role: "Registration Desk", needed: 5, filled: 3 },
    { role: "Logistics Helper", needed: 8, filled: 2 },
    { role: "Social Media", needed: 2, filled: 1 },
    { role: "First Aid", needed: 3, filled: 1 },
    { role: "Donor Support", needed: 6, filled: 4 }
  ];

  const emergencyNeeds = [
    { bloodType: "O-", hospital: "City Hospital", urgency: "Critical", contact: "01-4245678" },
    { bloodType: "B-", hospital: "Teaching Hospital", urgency: "High", contact: "01-4412345" },
    { bloodType: "Platelets", hospital: "Cancer Center", urgency: "Medium", contact: "01-4223344" }
  ];

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

  const handleRegister = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  const isRegistered = (eventId) => registeredEvents.includes(eventId);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 display-5">
        <FaTint className="text-danger me-2" />
        Blood Donation Events
      </h2>

      {/* Countdown Card */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="text-center py-4 bg-light">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <FaRegClock size={24} className="text-danger me-2" />
            <Card.Title className="mb-0 h4">Next Event Countdown</Card.Title>
          </div>
          <h5 className="mb-3">{upcomingEvents[0].title}</h5>
          <div className="countdown-display bg-danger text-white p-3 rounded d-inline-block">
            <h3 className="mb-0">{formatTime(timeLeft)}</h3>
          </div>
          <div className="mt-3">
            <FaCalendarAlt className="me-2 text-muted" />
            <span className="text-muted">
              {new Date(upcomingEvents[0].date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          <Button 
            variant="danger" 
            className="mt-3 px-4"
            onClick={() => handleRegister(upcomingEvents[0].id)}
            disabled={isRegistered(upcomingEvents[0].id)}
          >
            {isRegistered(upcomingEvents[0].id) ? "Registered ✓" : "Register Now"}
          </Button>
        </Card.Body>
      </Card>

      {/* Events Navigation */}
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant={activeTab === "upcoming" ? "danger" : "outline-danger"}
          className="mx-2"
          onClick={() => setActiveTab("upcoming")}
        >
          <FaRegCalendarCheck className="me-2" />
          Upcoming Events
        </Button>
        <Button
          variant={activeTab === "past" ? "danger" : "outline-danger"}
          className="mx-2"
          onClick={() => setActiveTab("past")}
        >
          <FaHistory className="me-2" />
          Past Events
        </Button>
      </div>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <Row className="g-4 mb-5">
          {upcomingEvents.map((event) => (
            <Col key={event.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Card.Title className="mb-0">
                      {event.title}
                    </Card.Title>
                    {event.registered >= event.quota ? (
                      <Badge bg="secondary">FULL</Badge>
                    ) : (
                      <Badge bg="success">OPEN</Badge>
                    )}
                  </div>
                  
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaCalendarAlt className="text-danger me-2" />
                      {new Date(event.date).toLocaleString()}
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaMapMarkerAlt className="text-danger me-2" />
                      <a href={event.mapLink} target="_blank" rel="noopener">{event.venue}</a>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaUsers className="text-danger me-2" />
                      {event.registered}/{event.quota} donors
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="d-flex align-items-center mb-1">
                        <FaTint className="text-danger me-2" />
                        <span>Needed: {event.bloodTypes.join(", ")}</span>
                      </div>
                      <ProgressBar 
                        now={(event.registered / event.quota) * 100} 
                        variant="danger" 
                        label={`${Math.round((event.registered / event.quota) * 100)}%`} 
                      />
                    </ListGroup.Item>
                  </ListGroup>
                  
                  <Card.Text className="text-muted mb-3">
                    {event.description}
                  </Card.Text>
                  
                  <div className="d-grid gap-2">
                    <Button 
                      variant={isRegistered(event.id) ? "outline-secondary" : "danger"}
                      onClick={() => handleRegister(event.id)}
                      disabled={isRegistered(event.id) || event.registered >= event.quota}
                    >
                      {isRegistered(event.id) ? "Registered ✓" : 
                       event.registered >= event.quota ? "Event Full" : "Register Now"}
                    </Button>
                    <Button variant="outline-danger" href={event.mapLink} target="_blank">
                      View Location
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <Row className="g-4 mb-5">
          {pastEvents.map((event) => (
            <Col key={event.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={event.image} 
                  alt={event.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <FaCalendarAlt className="text-danger me-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FaTint className="text-danger me-2" />
                    <span className="fw-bold">{event.collected} units collected</span>
                  </div>
                  <Card.Text className="text-muted">
                    <small>{event.impact}</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent">
                  <Button variant="outline-danger" size="sm">
                    View Photos
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Emergency Needs */}
      <h4 className="mt-5 mb-4">
        <MdEmergency className="text-danger me-2" />
        Urgent Blood Needs
      </h4>
      <Row className="g-4 mb-5">
        {emergencyNeeds.map((need, index) => (
          <Col key={index} md={4}>
            <Card className={`h-100 border-${index === 0 ? 'danger' : 'warning'}`}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0 text-danger">{need.bloodType}</h5>
                  <Badge bg={index === 0 ? 'danger' : 'warning'}>
                    {need.urgency}
                  </Badge>
                </div>
                <Card.Text>
                  <strong>Hospital:</strong> {need.hospital}<br />
                  <strong>Contact:</strong> {need.contact}
                </Card.Text>
                <Button variant="outline-danger" size="sm">
                  <FaPhone className="me-2" />
                  Call Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Volunteer Section */}
      <Card className="mb-5 border-0 shadow-sm">
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            <MdVolunteerActivism size={28} className="text-danger me-3" />
            <h4 className="mb-0">Volunteer Opportunities</h4>
          </div>
          
          <Row>
            <Col md={6}>
              <h5>Current Needs</h5>
              <ListGroup variant="flush">
                {volunteersNeeded.map((role, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <span>{role.role}</span>
                    <Badge bg="danger">
                      {role.filled}/{role.needed}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <h5>Why Volunteer?</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Gain valuable experience</li>
                <li className="mb-2">✓ Meet like-minded people</li>
                <li className="mb-2">✓ Make a real difference</li>
                <li className="mb-2">✓ Get volunteer certificate</li>
              </ul>
              <Button variant="danger" className="mt-3">
                Sign Up to Volunteer
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Social Media */}
      <Card className="border-0 bg-light">
        <Card.Body className="text-center py-4">
          <h4 className="mb-4">Stay Connected</h4>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg" className="rounded-circle">
              <FaFacebook />
            </Button>
            <Button variant="danger" size="lg" className="rounded-circle">
              <FaInstagram />
            </Button>
            <Button variant="info" size="lg" className="rounded-circle">
              <FaTwitter />
            </Button>
          </div>
          <p className="mt-4 mb-0">
            Follow us for live updates, photos from events, and urgent blood needs
          </p>
        </Card.Body>
      </Card>

      {/* Success Stories */}
      <div className="text-center mt-5">
        <h4 className="mb-4">💖 Stories of Lives Saved</h4>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Image 
                  src="/donor1.jpg" 
                  roundedCircle 
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <Card.Text>
                  "Donating blood helped save a mother during childbirth. I'll never forget the thank you letter I received."
                </Card.Text>
                <Card.Text className="text-muted">- Ramesh, 12-time donor</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Image 
                  src="/donor2.jpg" 
                  roundedCircle 
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <Card.Text>
                  "After my brother needed blood during surgery, I became a regular donor. It's the least I can do."
                </Card.Text>
                <Card.Text className="text-muted">- Sunita, 8-time donor</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Image 
                  src="/donor3.jpg" 
                  roundedCircle 
                  width={80}
                  height={80}
                  className="mb-3"
                />
                <Card.Text>
                  "Our company's blood drive became an annual tradition. Last year we collected 45 units!"
                </Card.Text>
                <Card.Text className="text-muted">- ABC Corporation</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EventSection;