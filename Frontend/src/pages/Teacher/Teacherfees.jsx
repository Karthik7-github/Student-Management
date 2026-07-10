import TeacherLayout from "./TeacherLayout";
import { useState } from "react";
const API = import.meta.env.VITE_API;

const Teacherfees = () => {

  const User = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [amount, setAmount] = useState(null);

const handlesubmit = async (e) => {
  e.preventDefault();

  if (!name || !id || !amount) {
    alert("All fields required");
    return;
  }

  try {
    const res = await fetch(`${API}/api/course/createfees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MemberName: name,
        MemberID: id,
        Amount: Number(amount),
        Receiptent: User.Name,
      }),
    });

    if (!res.ok) throw new Error("Request failed");

    const data = await res.json();

    if (data.error) {
      console.log(data.message);
      return;
    }

    console.log("Success:", data);

    setName("");
    setId("");
    setAmount("");

    alert("Receipet Created");
  } catch (err) {
    console.log(err.message);
  }
};

  return (
    <TeacherLayout>
      <form onSubmit={handlesubmit}>
        <div className="feesbox" style={{ "--user-color": User.Color }}>
          <h1>Fees Updates</h1>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Member Name :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter Member Name : "
              onChange={(res) => {
                setName(res.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Member ID :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={id}
              placeholder="Enter Member ID : "
              onChange={(res) => {
                setId(res.target.value);
              }}
              required
            />
          </div>
          <div className="feebox">
            <label>
              <h2 style={{ fontFamily: "italic", marginLeft: "20px" }}>
                Amount :{" "}
              </h2>
            </label>
            <input
              type="text"
              value={amount}
              placeholder="Enter Member Amount : "
              onChange={(res) => {
                setAmount(res.target.value);
              }}
              required
            />
          </div>
          <button type="submit">Generate Receipt</button>
        </div>
      </form>
    </TeacherLayout>
  );
};

export default Teacherfees;
