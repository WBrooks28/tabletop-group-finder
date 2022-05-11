import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row nav">
          <li className="mx-1">
            <Link
              to="/add-game"
              style={{
                textDecoration: "none",
                color: "white",
                margin: 26,
              }}
            >
              AddGame
            </Link>
          </li>
          <li className="mx-1">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                margin: 26,
              }}
              onClick={() => Auth.logout()}
            >
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav">
          <li className="mx-1">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            margin: 26,
          }}
        >
          Table-Top Game Finder
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
