import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_GAME } from "../utils/queries";
import styled from "styled-components";
import { BsPerson, BsClock, BsCalendar3 } from "react-icons/bs";

const Title = styled.h1`
  font-size: 52px;
  color: white;
`;

const Filters = styled.div`
  font-size: 28px;
  color: white;
`;

const Details = styled.p`
  font-size: 26px;
  color: black;
`;

const GameDetail = (props) => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_GAME, { variables: { id } });
  console.log("data", data);

  return (
    <div className="container-fluid">
      <Link to="/">← Back to Games</Link>
      <div className="game-info">
        <Title>{data?.game?.name}</Title>
        <Filters>
          <span>
            <BsPerson size={"20px"} />{" "}
          </span>

          {data?.game?.playerLimit}
          {" Players"}
          <br />
          <span>
            <BsClock size={"20px"} />{" "}
          </span>
          {data?.game?.duration}
          {" Minutes"}
          <br />
          <span>
            <BsCalendar3 size={"20px"} />{" "}
          </span>
          {data?.game?.date}
        </Filters>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>About This Game</h1>
            <Details>{data?.game?.description}</Details>
          </div>
          <div className="col-4">
            <h2>Seats Remaining!</h2>
            <button onClick={() => alert("Seat Booked!")}>Book Seat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
