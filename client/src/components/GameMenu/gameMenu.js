import React, { useState, useEffect } from "react";
import Game from "../Game/game";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";
import styled from "styled-components";

const Search = styled.h4`
  color: black;
  font-weight: bold;
  padding-left: 12px;
  padding-right: 12px;
`;

const GameMenu = () => {
  const { loading, data } = useQuery(QUERY_GAMES);
  // console.log("data", data);

  const [input, setInput] = useState("");

  return (
    <div className="container-fluid">
      <div className="continer-fluid search flex-row">
        <Search>Search By Title</Search>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>

        <Search>Search By Category</Search>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
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
