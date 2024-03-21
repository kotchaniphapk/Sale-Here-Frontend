import React, { useState } from "react";
import Proxumerlogo from "../src/assets/images/logo.png";
import { gql,useMutation } from "@apollo/client";
import CreateRoom from "./components/CreateRoom";
import ChatRoom from "./components/ChatRoom";

// I have mutation called CreateRoom and the name of value is Name type string
// I want to createRoom in strapi..
const CREATE_ROOM = gql`
  mutation CreateRoom($name: String!) {
    createRoom(data: { name: $name }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

function App() {
  const [inputName, setInputName] = useState("");
  const [appScreen, setAppScreen] = useState("user");
  const [roomName, setRoomName] = useState("");

  const [createRoom] = useMutation(CREATE_ROOM);

  const saveUser = () => {
    setAppScreen("actions");
  };

  const goCreateRoomScreen = () => {
    setAppScreen("create");
  };
  const goback = () => {
    setAppScreen("actions");
  };
  const goJoin = () => {
    setAppScreen("join");
  };

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  //when create new room and submit go to chat..
  const createChatRoom = () => {
    createRoom({ variables: { name: roomName }});
    setAppScreen("chat");
  };

  const joinChatRoom = () => {
    setAppScreen("chat");
  }

  return (
    <div className="main-page">
      <div className="logo">
        <img src={Proxumerlogo} alt="Proxumer logo" />
      </div>
      <div className="app">
        <div className="container">
          {/* user screen1 */}
          {appScreen === "user" && (
            <>
              <div className="title">
                <div>{"ชื่อของคุณ"}</div>
              </div>
              <input
                className="input"
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
              {inputName.length > 0 && (
                <button className="button submitbutton" onClick={saveUser}>
                  {"ยืนยัน"}
                </button>
              )}
            </>
          )}

          {/* actions screen2 */}
          {appScreen === "actions" && (
            <>
              <div className="title">
                <div>{`คุณ ${inputName}`}</div>
              </div>
              <button
                className="button submitbutton2"
                onClick={() => {
                  goCreateRoomScreen();
                }}
              >
                {"สร้างห้อง"}
              </button>
              <a
                className="link linkstyle"
                onClick={() => {
                  goJoin();
                }}
              >
                {"เข้าร่วมแชท"}
              </a>
            </>
          )}
          {/* user screen3 */}
          {appScreen === "create" && (
            <>
              <CreateRoom
                onRoomChange={(e) => setRoomName(e.target.value)}
                onCreate={() => {
                  createChatRoom();
                }}
                onBack={goback}
              />
            </>
          )}

          {appScreen === "join" && (
            <>
              <div className="title">
                <div>{"เข้าร่วมแชท"}</div>
              </div>
              <input
                className="input"
                onChange={(e) => {
                  setRoomName(e.target.value);
                }}
              />
              <div className="button-container">
                <a
                  className="link linkstyle"
                  onClick={() => {
                    goback();
                  }}
                >
                  {"กลับ"}
                </a>
                <button className="button submitbutton" onClick={joinChatRoom}>
                  {"ยืนยัน"}
                </button>
              </div>
            </>
          )}

          {appScreen === "chat" &&
            <ChatRoom 
              roomName={roomName}
              user={inputName}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
