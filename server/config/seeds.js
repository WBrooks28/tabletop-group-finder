const db = require("./connection");
const { User, Game } = require("../models");

db.once("open", async () => {
  await Game.deleteMany();

  const games = await Game.insertMany([
    {
      name: "Edge of the Empire",
      system: "Star Wars: Fantasy Flight Games",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 3,
      playerLimit: 6,
      date: "2022-05-28",
    },
    {
      name: "Storm King's Thunder",
      system: "Dungeons & Dragons 5e",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 5,
      playerLimit: 8,
      date: "2022-05-29",
    },
    {
      name: "Candlekeep Mysteries",
      system: "Dungeons & Dragons 5e",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 4,
      playerLimit: 6,
      date: "2022-05-19",
    },
    {
      name: "Lair of the Gobbler",
      system: "DURF",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 4,
      playerLimit: 4,
      date: "2022-05-19",
    },
    {
      name: "Crown of the Kobold King",
      system: "Pathfinder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 3,
      playerLimit: 4,
      date: "2022-05-15 ",
    },
    {
      name: "Medusa in the Sleeping Garden",
      system: "Mork Borg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 6,
      playerLimit: 12,
      date: "2022-05-18",
    },
    {
      name: "Slow Sleigh to Plankton Downs",
      system: "Troika",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 2,
      playerLimit: 6,
      date: "2022-05-22",
    },
    {
      name: "The Children of Fear",
      system: "Call of Cthulhu",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 3,
      playerLimit: 10,
      date: "2022-05-23",
    },
    {
      name: "Junkers Delight",
      system: "Starfinder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 4,
      playerLimit: 8,
      date: "2022-05-25",
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
