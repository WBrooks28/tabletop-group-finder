const db = require("./connection");
const { User, Game } = require("../models");

db.once("open", async () => {
  await Game.deleteMany();

  const games = await Game.insertMany([
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
    {
      name: "Call of Duty",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 180,
      playerLimit: 10,
      date: "May 12 2022",
    },
    {
      name: "FIFA",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 180,
      playerLimit: 8,
      date: "May 12 2022",
    },
  ]);

  console.log("games seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
