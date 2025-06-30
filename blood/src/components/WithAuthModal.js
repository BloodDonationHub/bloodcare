// src/components/WithAuthModal.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

const WithAuthModal = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) setShowModal(true);
  }, [isLoggedIn]);

  return (
    <>
      {children}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default WithAuthModal;
