import { useState, useEffect } from "react";
import axios from "axios";

const Clubfaq = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/getclubfaq")
      .then((res) => {
        setFaq(res.data.ClubFaq);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredfaqs = faq.filter((c) => c.ClubID === Club.ClubID);
  console.log(filteredfaqs);

  return (
    <div className="clubfaqs">
      {filteredfaqs.length > 0 ? (
        filteredfaqs.map((res, index) => (
          <div
            className="clubfaq"
            key={index}
            style={{
              backgroundColor: res.Color,
              boxShadow: `0px 0px 20px ${res.Color}`,
              "--faq-color": res.Color,
            }}
          >
            <h1>{res.MemberName}</h1>
            <h2
              style={{
                border: "2px solid white",
                padding: "6px",
                borderRadius: "10px",
              }}
            >
              Q. {res.Question}
            </h2>
            <h3>{res.Answer}</h3>
          </div>
        ))
      ) : (
        <h1 style={{ marginTop: "20px" }}>No FAQS </h1>
      )}
    </div>
  );
};

export default Clubfaq;
