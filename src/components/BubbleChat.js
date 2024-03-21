import React from "react";

function BubbleChat({ Obj, showMessage, user,onChange }) {
  return (
    <div className="buble-container">
      <div className="bublename">{`คุณ ${user}`}</div>
      <div className="bublemessage">
        <div className="message" onChange={onChange}>
          <span key={Obj}>{showMessage}</span>
        </div>
      </div>
    </div>
  );
}

export default BubbleChat;
