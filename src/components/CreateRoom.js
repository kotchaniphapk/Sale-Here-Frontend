import React from "react"

export default function CreateRoom({ onRoomChange, onCreate, onBack }) {

  return (
    <>
      <div className="title">
        <div>{"สร้างห้องใหม่"}</div>
      </div>
      <input
        className="input"
        onChange={(e) => onRoomChange(e)}
      />
      <div className="button-container">
        <a
          className="link linkstyle"
          onClick={onBack}
        >
          {"กลับ"}
        </a>
        <button className="button submitbutton" onClick={onCreate}>
          {"ยืนยัน"}
        </button>
      </div>
    </>
  )
}
