import React, { useState, useEffect } from "react";
import Game from "../Game/game";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";

const GameMenu = () => {
  const { loading, data } = useQuery(QUERY_GAMES);
  // console.log("data", data);

  const [input, setInput] = useState("");

  return (
    <div className="my-2">
      <div>
        <h1>Search By Name:</h1>
        <input
          name="Search By Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div className="flex-row">
        {data?.games
          ?.filter((game) =>
            game.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((game) => (
            <Game
              key={game._id}
              _id={game._id}
              name={game.name}
              description={game.description}
              duration={game.duration}
              playerLimit={game.playerLimit}
              date={game.date}
            />
          ))}
      </div>
    </div>
  );
};

export default GameMenu;
