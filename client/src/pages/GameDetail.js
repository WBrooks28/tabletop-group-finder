import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_GAME } from "../utils/queries";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 38px;
  color: white;
`;

const GameDetail = (props) => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_GAME, { variables: { id } });
  console.log("data", data);

  return (
    <div className="container">
      <Link to="/">← Back to Games</Link>
      <div className="game-info">
        <Title>{data?.game?.name}</Title>
      </div>
    </div>
  );
};

export default GameDetail;
