import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

const DraggableChatbot = () => {
  const [showBot, setShowBot] = useState(false);
  const nodeRef = useRef(null); // ✅ NEW

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {!showBot ? (
        <button
          className="btn btn-primary rounded-circle p-3 shadow"
          onClick={() => setShowBot(true)}
          style={{
            backgroundColor: "#0084FF",
            fontSize: "1.5rem",
            width: "60px",
            height: "60px",
          }}
        >
          💬
        </button>
      ) : (
        <Draggable nodeRef={nodeRef} handle=".chatbot-drag-header">
          <div ref={nodeRef}>
            <div
              style={{
                position: "absolute",
                bottom: 90,
                right: 0,
                width: 370,
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              {/* Drag Header */}
              <div
                className="chatbot-drag-header"
                style={{
                  background: "#d92332",
                  color: "white",
                  padding: "8px 12px",
                  cursor: "move",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                BloodBot
                <button
                  onClick={() => setShowBot(false)}
                  style={{
                    float: "right",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                >
                  ❌
                </button>
              </div>

              {/* Chatbot UI */}
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default DraggableChatbot;
