import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_GAME } from "../utils/queries";
import styled from "styled-components";
import { BsPerson, BsClock, BsCalendar3 } from "react-icons/bs";

const Title = styled.h1`
  font-size: 52px;
  color: var(--light);
  font-weight: bolder;
  padding: 12px;
`;

const Filters = styled.div`
  font-size: 28px;
  color: var(--light);
  font-weight: bold;
  padding: 16px;
`;

const Details = styled.p`
  font-size: 26px;
  color: black;
`;

const About = styled.h1`
  font-weight: bold;
  color: black;
`;

const Seats = styled.h2`
  font-weight: bold;
  color: black;
`;

const GameDetail = (props) => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_GAME, { variables: { id } });
  console.log("data", data);

  return (
    <div className="container-fluid">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "bolder",
          fontSize: 22,
        }}
      >
        ← Back to Games
      </Link>
      <div>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <About>About This Game</About>
            <Details>{data?.game?.description}</Details>
          </div>
          <div className="col-4 text-center">
            <Seats>Seats Remaining!</Seats>
            <button onClick={() => alert("Seat Booked!")}>Book Seat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
