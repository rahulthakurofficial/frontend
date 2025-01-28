import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Draggable from "react-draggable"; 

import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const GigglezzChatbot = () => {
  return (
    <Draggable> 
      <div style={{ 
        position: "fixed", 
        bottom: "20px", 
        right: "20px", 
        zIndex: 999,
        position: 'absolute',
        width: "350px",  
        height: "500px", 
        overflow: "hidden", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        backgroundColor: "white",
        transform: "rotate(0deg)", 
        transition: "transform 0.1s ease-in-out" 
      }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </Draggable>
  );
};

export default GigglezzChatbot;
