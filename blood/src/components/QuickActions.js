import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaUserPlus, FaTint, FaSearchLocation, FaHospital } from 'react-icons/fa';
import '../App.css';
const QuickActions = () => {
  const actions = [
    {
      icon: <FaHandHoldingHeart size={32} />,
      title: 'Become a Volunteer',
      subtitle: 'Be part of us!',
      to: '/become-volunteer',
    },
    {
      icon: <FaUserPlus size={32} />,
      title: 'Become a Member',
      subtitle: 'Join us!',
      to: '/become-member',
    },
    {
      icon: <FaTint size={32} />,
      title: 'Donate Blood',
      subtitle: 'Save lives!',
      to: '/donate-blood',
    },
    {
      icon: <FaSearchLocation size={32} />,
      title: 'Find a Blood Care near you',
      subtitle: 'Find us!',
      to: '/find-red-cross',
    },
    {
      icon: <FaHospital size={32} />,
      title: 'Blood Bank',
      subtitle: 'Check availability',
      to: '/blood-bank',
    }
  ];

  return (
    <div className="container py-5">
      <div className="row text-center g-4">
        {actions.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Link to={item.to} className="text-decoration-none text-dark">
              <div className="card quick-action-card shadow-lg border-0 rounded-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                  <div className="icon-container mb-4">
                    {item.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
