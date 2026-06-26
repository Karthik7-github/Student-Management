import StudentLayout from "./StudentLayout";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Studentchat = () => {
  const User = JSON.parse(localStorage.getItem("user"));
  const [rec, setRec] = useState("");
  const currentUser = User.StudentID;
  const [msg, setMsg] = useState([]);
  const [sendmsg, setSendmsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getmsgs")
      .then((res) => setMsg(res.data.Message))
      .catch((err) => console.log(err));
  }, []);

  const filteredmsgs = msg.filter(
    (c) =>
      (c.SenderID == rec && c.ReceiverID == User.StudentID) ||
      (c.ReceiverID == rec && c.SenderID == User.StudentID),
  );

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!sendmsg.trim()) return;

    const newMsg = {
      SenderID: User.StudentID,
      ReceiverID: rec,
      Message: sendmsg,
    };

    setMsg((prev) => [...prev, newMsg]);

    try {
      const res = await fetch("http://localhost:5000/api/course/createmsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMsg),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.Message || "Error");
      }
    } catch (err) {
      console.log(err);
    }

    setSendmsg("");
  };

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [filteredmsgs]);

  return (
    <StudentLayout>
      <div className="promenu">
        <div className="userprotitle" style={{ marginTop: "20px" }}>
          <h1 style={{ fontSize: "40px"}}>Chats</h1>
        </div>
        <div className="persontosend">
          <input
            type="text"
            placeholder="Enter the ID of Teacher to send a Text "
            onChange={(e) => {
              setRec(e.target.value);
            }}
          />
        </div>
        <div className="chatboxinner">
          <div className="chatboxouter" style={{boxShadow:`0px 0px 5px black`,backgroundColor:User.Color}}>
            {filteredmsgs.length > 0 ? (
              filteredmsgs.map((message, index) => {
                return (
                  <div
                    className={`msg ${message.SenderID === currentUser ? "sent" : "received"}`}
                    key={index}
                    style={{ backgroundColor: message.Color }}
                  >
                    {message.Message}
                  </div>
                );
              })
            ) : (
              <h1 style={{ margin: "150px 0px 0px 300px" }}>
                No Chat Available
              </h1>
            )}
            <div ref={chatEndRef}></div>
          </div>
        </div>
        <div className="personwhosends">
          <textarea
            name=""
            id=""
            rows="4"
            cols="100"
            placeholder="Enter The Message To Send"
            value={sendmsg}
            onChange={(e) => {
              setSendmsg(e.target.value);
            }}
          ></textarea>
          <button
            style={{ backgroundColor: User.Color }}
            onClick={handlesubmit}
          >
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Studentchat;
