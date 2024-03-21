import React, { useEffect, useState } from "react";
import BubbleChat from "./BubbleChat.js";
import { gql, useQuery } from "@apollo/client";
const { io } = require("socket.io-client");

const socket = io("ws://localhost:1337");

const GET_MESSAGE = (roomName) => gql`
  query getMessage {
    rooms(filters: { name: { eq: "${roomName}" } }) {
      data {
        id
        attributes {
          name
          messages {
            data {
              id
              attributes {
                user
                message
              }
            }
          }
        }
      }
    }
  }
`;

function ChatRoom({ roomName, user }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);  

  const { data } = useQuery(GET_MESSAGE(roomName));
  
  //when run component connect socket
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    // set state not working well in socket.io events
    // this is a workaround
    const setNewState = (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          attributes: {
            user: msg.user,
            message: msg.message
          }
        }
      ]);
    };

    socket.on("getMessage", setNewState);

    return () => {
      socket.off("connect");
      socket.off("getMessage", setNewState);
    }
  }, []);
  
  //show new message
  useEffect(() => {
  }, [messages]);

  //sent message
  //79 I want to keep all of messages on the setMessages  
  useEffect(() => {
    const roomId = data?.rooms?.data[0]?.id;
    if (roomId) {
      socket.emit("join", roomId);
    };

    const allMessage = data?.rooms?.data[0]?.attributes?.messages?.data;
    if (allMessage && messages.length === 0) {
      setMessages(allMessage); //get all messages
    };
  }, [data]);
  
  // sent to Client and also save in strapi
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    socket.emit("sendMessage", { room: data?.rooms?.data[0]?.id, user, message }); // send room id, user name and message

    setMessage("");
  };

  // if (loading) return "Loading...";
  if (!data?.rooms?.data?.[0]) return (
    <div>No room found</div>
  );

  return (
    <div className="chatroom-container">
      <div className="roomtitle">{`ห้อง ${roomName}`}</div>
      <div className="chat-background">
        <div>
          {messages.map((messageObj) => (
            <BubbleChat
              key={messageObj.id}
              showMessage={messageObj.attributes.message}
              user={messageObj.attributes.user}
            />
          ))}
        </div>
        <div className="sentbox-container">
          <form onSubmit={sendMessage}>
            <input
              value={message}
              type="text"
              id="sentbox"
              placeholder="Enter เพื่อส่ง"
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
