import React, { useState } from "react";
import Proxumerlogo from "../src/assets/images/logo.png";
import { gql, useQuery, useMutation } from "@apollo/client";
import CreateRoom from "./components/CreateRoom";
import ChatRoom from "./components/ChatRoom";

// const ADD_TODO = gql`
//   mutation AddTodo($type: String!) {
//     addTodo(type: $type) {

//       }
//     }
//   }
// `;

function App() {
  const [inputName, setInputName] = useState("");
  const [user, setUser] = useState({});
  const [appScreen, setAppScreen] = useState("chat");
  const [roomName, setRoomName] = useState("test");

  const saveUser = () => {
    setUser({ name: inputName });
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

  const goChatRoom = () => {
    setAppScreen("chat");
  };

  //let input;
  // const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

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
                <div>{`คุณ ${user.name}`}</div>
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
                  goChatRoom();
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
                  setInputName(e.target.value);
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
                <button className="button submitbutton" onClick={saveUser}>
                  {"ยืนยัน"}
                </button>
              </div>
            </>
          )}
          {appScreen === "chat" && 
          <ChatRoom 
          roomName={roomName} 
          />}
        </div>
      </div>
    </div>
  );
}

export default App;
