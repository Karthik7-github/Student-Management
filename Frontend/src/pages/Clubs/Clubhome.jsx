const Clubhome = () => {
  const Club = JSON.parse(localStorage.getItem("Club"));

  return (
    <div className="clubhome">
      <h2 style={{ color: Club.Color }}>
        CLUB INCHARGE : <h3 style={{ color: "black" }}>{Club.ClubIncharge}</h3>
      </h2>
      <h2 style={{ color: Club.Color }}>
        CLUB LEADER : <h3 style={{ color: "black" }}>{Club.ClubLeader}</h3>
      </h2>
      <div className="description">
        <h1 style={{ color: Club.Color }}>Description : </h1>
        <h2>{Club.Description}</h2>
      </div>
      <div className="clubevents">
        <h1 style={{color:Club.Color}}>Events :</h1>
        {Club.Events.length > 0 ? (
          Club.Events.map((event, index) => (
            <h2 key={index} style={{color:Club.Colortwo}}>{event.EventName}</h2>
          ))
        ) : (
          <h2>No Events Available</h2>
        )}
      </div>
      <div className="clubevents">
        <h1 style={{color:Club.Color}}>Awards :</h1>
        {Club.Events.length > 0 ? (
          Club.Awards.map((event, index) => (
            <h2 key={index} style={{color:Club.Colorthree}}>{event.AwardName}</h2>
          ))
        ) : (
          <h2>No Awards Available</h2>
        )}
      </div>
    </div>
  );
};

export default Clubhome;
