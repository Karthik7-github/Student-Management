import { useLocation } from "react-router-dom";

const studentwelcome = () => {
  
  const location = useLocation();

  const user = location.state?.user || JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <h1>No user data</h1>;
  }

  return (
    <div>
      <h1>Welcome {user?.Email}</h1>
      <p>Role: {user?.Role}</p>
    </div>
  );
};

export default studentwelcome;
