import React from "react";
import BubbleChat from "./BubbleChat.js";

function ChatRoom({ roomName }) {
  return (
    <div className="chatroom-container">
      <div className="roomtitle">{`ห้อง ${roomName}`}</div>
      <div className="chat-background">
        <div>
          <BubbleChat />
        </div>
        <div className="sentbox-container">
          <input type="text" id="sentbox" placeholder="Enter เพื่อส่ง"></input>
        </div>
      </div>

    </div>
  );
}

export default ChatRoom;
