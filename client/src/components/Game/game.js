import React from "react";
import { Link } from "react-router-dom";

const Game = (game) => {
  const { name, description, duration, date, playerLimit } = game;

  return (
    <div className="card px-1 py-1">
      <Link to={`/games/${_id}`}>
        <p>{name}</p>
      </Link>
      <div>
        <div>{description}</div>
        <div>{playerLimit} player limit</div>
        <div>Duration: {duration} minutes</div>
        <div>Game Date: {date}</div>
      </div>
    </div>
  );
};

export default Game;
