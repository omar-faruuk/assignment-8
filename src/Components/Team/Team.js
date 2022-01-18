import React from "react";
import { useHistory } from "react-router-dom";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
  const history = useHistory();
  return (
    <div className="team-info">
      <img src={strTeamBadge} alt="" />
      <h4> {strTeam} </h4> <h5> Sports type: {strSport} </h5>{" "}
      <button onClick={() => history.push(`/team/${idTeam}`)}>
        {" "}
        Explore <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};

export default Team;
