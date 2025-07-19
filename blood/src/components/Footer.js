import React from "react";
import "../App.css"; // 👈 Custom styling


const Footer = () => {
    return (
        <footer className="footer-glass animate-footer py-5 mt-5">
            <div className="container">
                <div className="row align-items-start text-white">

                    {/* 🩸 Logo + About */}
                    <div className="col-md-4 mb-4">
                        <h3 className="fw-bold text-danger">🩸 BloodCare</h3>
                        <p className="text-light">
                            BloodCare is dedicated to saving lives by making blood donation and access more accessible and efficient across Nepal.
                        </p>
                        <div className="d-flex align-items-center gap-3 mt-2">
                            <img src="/icons/hamro.svg" alt="Hamro" height="30" />
                            <img src="/icons/rahat.svg" alt="Rahat" height="30" />
                        </div>
                    </div>

                    {/* 📞 Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-semibold text-white">Contact Info</h5>
                        <ul className="list-unstyled text-light small">
                            <li className="mb-1">📍 Kathmandu, Nepal</li>
                            <li className="mb-1">📞 +977-9800000000</li>
                            <li>✉️ info@bloodcare.org</li>
                        </ul>
                    </div>

                    {/* 📚 Resources */}
                    <div className="col-md-2 mb-4">
                        <h5 className="fw-semibold text-white">Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Blood Basics</a></li>
                            <li><a href="#" className="footer-link">Find a Donor</a></li>
                            <li><a href="#" className="footer-link">Urgent Requests</a></li>
                            <li><a href="#" className="footer-link">FAQ</a></li>
                        </ul>
                    </div>

                    {/* ✉️ Newsletter & 🌐 Socials */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-semibold text-white">Newsletter</h5>
                        <p className="text-light small">Get the latest updates.</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <button className="btn btn-danger" type="button">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <div className="d-flex gap-3 mt-2">
                            <a href="#" className="footer-icon"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="footer-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="footer-icon"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="footer-icon"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="border-light" />
                <p className="text-center text-light small mb-0">
                    &copy; {new Date().getFullYear()} BloodCare. All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;
