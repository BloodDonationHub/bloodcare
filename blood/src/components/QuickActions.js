import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandHoldingHeart,
  // FaUserPlus,
  FaTint,
  FaSearchLocation,
  FaHospital
} from 'react-icons/fa';
import '../App.css';

const QuickActions = () => {
  const actions = [
    {
      icon: <FaHandHoldingHeart size={24} />,
      title: 'Become a Volunteer',
      subtitle: 'Be part of us!',
      to: '/become-volunteer',
    },
    // {
    //   icon: <FaUserPlus size={24} />,
    //   title: 'Become a Member',
    //   subtitle: 'Join us!',
    //   to: '/become-member',
    // },
    {
      icon: <FaTint size={24} />,
      title: 'Donate Blood',
      subtitle: 'Save lives!',
      to: '/donate-blood',
    },
    {
      icon: <FaSearchLocation size={24} />,
      title: 'Find a Blood Care near you',
      subtitle: 'Find us!',
      to: '/find-red-cross',
    },
    {
      icon: <FaHospital size={24} />,
      title: 'Blood Bank',
      subtitle: 'Check availability',
      to: '/blood-bank',
    }
  ];

  return (
    <div className="container py-4">
      <div className="row text-center g-3">
        {actions.map((item, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <Link to={item.to} className="text-decoration-none text-dark">
              <div className="card quick-action-card shadow-sm border-0 rounded-3">
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-3">
                  <div className="icon-container mb-3">
                    {item.icon}
                  </div>
                  <h6 className="fw-semibold mb-1">{item.title}</h6>
                  <small className="text-muted">{item.subtitle}</small>
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
