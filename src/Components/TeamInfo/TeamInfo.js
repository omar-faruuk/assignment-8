import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../footballData/data.json";
import "./TeamInfo.css";
import male from "../../img/male.png";
import female from "../../img/female.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faGenderless,
  faChevronUp,
  faFootballBall,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const TeamInfo = () => {
  const [teamInfo, setTeamInfo] = useState({});
  const { idTeam } = useParams();
  const {
    strTeam,
    strSport,
    strTeamBadge,
    strCountry,
    strDescriptionEN,
    strDescriptionIT,
    strGender,
    strYoutube,
    strTwitter,
    strFacebook,
    intFormedYear,
  } = teamInfo;
  console.log(teamInfo);
  useEffect(() => {
    const team = fakeData.find((element) => element.idTeam === idTeam);
    setTeamInfo(team);
  }, [idTeam]);
  return (
    <div className="team-details">
      <div className="info-banner">
        <img src={strTeamBadge} alt="" />
      </div>{" "}
      <div className="details-info">
        <div className="card">
          <div className="text">
            <h2> {strTeam} </h2>{" "}
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faLocationArrow} /> Founded:{" "}
                {intFormedYear}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faChevronUp} /> Country: {strCountry}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faFootballBall} /> Sports type:{" "}
                {strSport}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faGenderless} /> Gender: {strGender}
              </li>
            </ul>{" "}
          </div>{" "}
          <div className="card-img">
            {" "}
            {strGender === "Male" ? (
              <img src={male} alt="" />
            ) : (
              <img src={female} alt="" />
            )}{" "}
          </div>{" "}
        </div>{" "}
        <p> {strDescriptionEN} </p> <p> {strDescriptionIT} </p>{" "}
        <div className="social-icon">
          <ul>
            <li>
              {" "}
              <a href={"https://" + strFacebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href={"https://" + strYoutube}>
                {" "}
                <FontAwesomeIcon icon={faYoutube} />
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href={"https://" + strTwitter}>
                {" "}
                <FontAwesomeIcon icon={faTwitter} />
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default TeamInfo;
