import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import styled from "styled-components";
import { BsPerson, BsClock, BsCalendar3 } from "react-icons/bs";

const Title = styled.p`
  text-decoration: none;
  font-size: 26px;
`;

const Game = (game) => {
  const { _id, name, description, duration, date, playerLimit } = game;

  return (
    <div className="card px-1 py-1">
      <img src={hero} className="card-img-top" alt="'"></img>
      <div className="card-body">
        <Link to={`/games/${_id}`}>
          <Title>{name}</Title>
        </Link>
        <div>
          <div>{description}</div>
          <div>
            <BsPerson size={"16px"} />
            {playerLimit} player limit
          </div>
          <div>
            <BsClock size={"16px"} />
            {duration} minutes
          </div>
          <div>
            <BsCalendar3 size={"16px"} />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
