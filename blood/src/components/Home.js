import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuickActions from "./QuickActions";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Draggable from "react-draggable";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import "../App.css";
import "./Home.css";
import { useLanguage } from "../context/LanguageContext";
import Footer from "./Footer";
import newsData from "../data/newsData.json";


const Home = () => {
  const [showBot, setShowBot] = useState(false);
  const buttonRef = useRef(null);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);


  const toggleChat = () => {
    setShowBot((prevState) => !prevState);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container pt-4 flex-grow-1">

        {/* 🌟 Featured News Preview */}
       
        <section className="mb-5 row align-items-center">
          <div className="col-md-6">
            <img
              src={newsData[4].image}
              alt={newsData[4].title.en}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3>{newsData[0].title.en}</h3>
            <p>{newsData[0].description.en.slice(0, 150)}...</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/news")}
            >
              Read More
            </button>
          </div>
        </section>


        {/* ⚡ Quick Actions */}
        <section className="mb-5">

          <QuickActions />
        </section>

        {/* 👋 Introduction Preview */}
        <section className="mb-5 row align-items-start">
          {/* LEFT SIDE */}
          <div className="col-md-6">
            <div className="row mb-3">
              <div className="col-6">
                <img
                  src="/images/intro.jpg"
                  alt="Vision"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/images/107.jpeg"
                  alt="Mission"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h4>About BloodCare</h4>
              <p>
                BloodCare is a volunteer-driven platform dedicated to bridging the gap between blood donors and patients in need.
                We aim to build a strong, reliable network to ensure quick and safe access to blood throughout Nepal.
                Our mission includes organizing regular awareness campaigns and donation camps to foster a culture of voluntary blood donation.
              </p>
            </div>
            <button
              className="btn btn-outline-secondary mt-2"
              onClick={() => navigate("/about/introduction")}
            >
              See All
            </button>
          </div>


          {/* RIGHT SIDE ACCORDION */}
          <div className="col-md-6">
            {["vision", "mission", "objective"].map((sectionKey) => (
              <div className="mb-3" key={sectionKey}>
                <div
                  className="d-flex justify-content-between align-items-center bg-light p-2 rounded shadow-sm"
                  onClick={() =>
                    setOpenSection(openSection === sectionKey ? null : sectionKey)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <strong className="text-danger">
                    {{
                      vision: "Our Vision",
                      mission: "Our Mission",
                      objective: "Objective and Functions",
                    }[sectionKey]}
                  </strong>
                  <span className="text-danger">{openSection === sectionKey ? "−" : "+"}</span>
                </div>
                {openSection === sectionKey && (
                  <div className="p-2">
                    {{
                      vision:
                        "To create a nationwide network where every person in need of blood can access it instantly through voluntary donations and digital coordination.",
                      mission:
                        "To promote voluntary blood donation, raise awareness, and use technology to connect donors with recipients efficiently.",
                      objective: (
                        <ul className="mb-0">
                          <li>Maintain a database of voluntary donors</li>
                          <li>Organize awareness campaigns and blood donation camps</li>
                          <li>Collaborate with hospitals, NGOs, and youth groups</li>
                          <li>Develop tools for real-time donor-recipient matching</li>
                        </ul>
                      ),
                    }[sectionKey]}
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>


        {/* 📰 More News/Events */}
        <section className="mb-5 text-center">
          <h2 className="mb-3">{t("moreUpdates") || "More Updates"}</h2>
          <p>{t("eventHighlight") || "Stay updated with our latest events and donation drives happening across Nepal."}</p>
          <button className="btn btn-primary" onClick={() => navigate("/news")}>
            {t("viewAllNews") || "View All News"}
          </button>
        </section>
      </div>

      {/* 🤖 Draggable Chatbot */}
      <Draggable nodeRef={buttonRef}>
        <div ref={buttonRef} className="chatbot-container">
          <button
            className="btn btn-primary rounded-circle p-3 shadow chat-button"
            onClick={toggleChat}
            title="Chat with BloodBot"
          >
            💬
          </button>

          {showBot && (
            <div className="chatbox">
              <div className="chatbox-header">
                BloodBot
                <button
                  onClick={toggleChat}
                  className="close-chat"
                  title="Close Chat"
                >
                  ❌
                </button>
              </div>

              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}
        </div>
      </Draggable>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Home;
