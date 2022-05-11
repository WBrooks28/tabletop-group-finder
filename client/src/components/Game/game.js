import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import styled from "styled-components";
import { BsPerson, BsClock, BsCalendar3 } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";

const Title = styled.p`
  text-decoration: none;
  font-size: 32px;
  color: #05064e;
`;

const Game = (game) => {
  const { _id, name, description, duration, date, playerLimit, system } = game;
  console.log("Game", game);
  return (
    <div className="card px-1 py-1">
      <div className="card-body">
        <Link to={`/games/${_id}`} style={{ textDecoration: "none" }}>
          <img src={hero} className="card-img-top" alt=""></img>
          <Title>{name}</Title>
        </Link>
        <div>
          <div>{description}</div>
          <div>
            <div>
              <span>
                <GrSystem size={"16px"} />{" "}
              </span>
              {system}
            </div>
            <span>
              <BsPerson size={"16px"} />{" "}
            </span>
            {playerLimit} player limit
          </div>
          <div>
            <span>
              <BsClock size={"16px"} />{" "}
            </span>
            {duration} minutes
          </div>
          <div>
            <span>
              <BsCalendar3 size={"16px"} />{" "}
            </span>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
