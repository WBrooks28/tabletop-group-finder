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
  console.log("Game", game);
  return (
    <div className="card px-1 py-1">
      <div className="card-body">
        <Link to={`/games/${_id}`}>
          <img src={hero} className="card-img-top" alt="'"></img>
          <Title>{name}</Title>
        </Link>
        <div>
          <div>{description}</div>
          <div>
            <span>
              <BsPerson size={"16px"} />
            </span>
            {playerLimit} player limit
          </div>
          <div>
            <span>
              <BsClock size={"16px"} />
            </span>
            {duration} minutes
          </div>
          <div>
            <span>
              <BsCalendar3 size={"16px"} />
            </span>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
