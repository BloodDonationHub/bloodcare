// src/components/Home.js
import React, { useState, useRef } from "react";
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
import Footer from "./Footer"; // ✅ IMPORT FOOTER COMPONENT

const Home = () => {
  const [showBot, setShowBot] = useState(false);
  const buttonRef = useRef(null);
  const { t } = useLanguage();

  const toggleChat = () => {
    setShowBot((prevState) => !prevState);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center pt-5 flex-grow-1">
        <h1>{t("welcome")}</h1>
        <p>{t("homeDescription")}</p>

        <QuickActions />

        {/* 🤖 Draggable Chat */}
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
      </div>

      {/* ✅ FOOTER GOES HERE */}
      <Footer />
    </div>
  );
};

export default Home;
