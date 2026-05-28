import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ClubChat = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));
  const User = JSON.parse(localStorage.getItem("user"));
  // const [rec, setRec] = useState("");
  const currentUser = User.Name;
  const [msg, setMsg] = useState([]);
  const [sendmsg, setSendmsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubmsgs")
      .then((res) => setMsg(res.data.Message))
      .catch((err) => console.log(err));
  }, []);

  const filteredmsgs = msg.filter((c) => c.ClubID === Club.ClubID);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!sendmsg.trim()) return;

   const colors = [
  "#ff6d7c", // light red
  "hsl(32, 100%, 68%)", // light orange
  "#ffff58", // light yellow
  "#87ffa1", // light green
  "#76c4ff", // light blue
  "#f7adff", // light purple
  "#c48aff", // soft violet
  "#8b9de6", // pastel blue
  "#873a3f", // soft pink
  "#ff5d98", // blush pink
  "#d5ff90", // pale green
  "#20ffad", // mint
  "#FFDAC1", // peach
  "#76ff27", // fresh green
  "#02fff7", // aqua
  "#c85605", // soft orange
  "#89e1eb", // ice blue
  "#c8ff00", // cream yellow
  "#7777ff", // lavender
  "#ffe100"  // light gold
];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newMsg = {
      ClubID: Club.ClubID,
      MemberName: User.Name,
      Message: sendmsg,
      Color: randomColor,
    };

    setMsg((prev) => [...prev, newMsg]);

    try {
      const res = await fetch(
        "http://localhost:5000/api/course/createclubmsg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMsg),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.Message || "Error");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(newMsg);
    setSendmsg("");
  };

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [filteredmsgs]);

  return (
    <div>
      <div className="clubchat" style={{ "--club-color": Club.Color }}>
        <div className="chatboxinner">
          <div className="chatboxouter">
            {filteredmsgs.length > 0 ? (
              filteredmsgs.map((message, index) => {
                return (
                  <div
                    className={`msg ${message.MemberName === currentUser ? "sent" : "received"}`}
                    key={index}
                    style={{ backgroundColor: message.Color }}
                  >
                   {message.MemberName} : {message.Message}
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
      </div>
      <div className="promenuclub">
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
    </div>
  );
};

export default ClubChat;
