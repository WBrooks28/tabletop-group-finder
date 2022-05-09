import React from "react";
import Game from "../Game/game";

const GameMenu = () => {
  const games = [
    {
      name: "Star Wars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 6,
      date: "May 8 2022",
    },
    {
      name: "Red Dead II",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 8,
      date: "May 9 2022",
    },
    {
      name: "Modern Warfare",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 6,
      date: "May 9 2022",
    },
    {
      name: "Age of Empires",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 4,
      date: "May 9 2022",
    },
    {
      name: "D&D",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 4,
      date: "May 10 2022",
    },
    {
      name: "Forza",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 12,
      date: "May 10 2022",
    },
    {
      name: "Halo Infinite",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 6,
      date: "May 12 2022",
    },
  ];

  return (
    <div className="my-2">
      <div className="flex-row">
        {games.map((games, index) => (
          <Game
            key={index}
            _id={index}
            name={games.name}
            description={games.description}
            duration={games.duration}
            playerLimit={games.playerLimit}
            date={games.date}
          />
        ))}
      </div>
    </div>
  );
};

export default GameMenu;
