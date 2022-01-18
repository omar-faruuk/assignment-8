import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import fakeData from "../../footballData/data.json";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(fakeData);
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <h2>Team explorer</h2>
      </div>

      <div className="team">
        {teams.map((team) => (
          <Team key={team.idTeam} team={team}></Team>
        ))}
      </div>
    </div>
  );
};

export default Home;
