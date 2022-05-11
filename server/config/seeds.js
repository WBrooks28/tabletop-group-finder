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
      duration: 90,
      playerLimit: 6,
      date: "May 28 2022",
    },
    {
      name: "Storm King's Thunder",
      system: "Dungeons & Dragons 5e",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 8,
      date: "May 29 2022",
    },
    {
      name: "Candlekeep Mysteries",
      system: "Dungeons & Dragons 5e",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 6,
      date: "May 19 2022",
    },
    {
      name: "Lair of the Gobbler",
      system: "DURF",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 90,
      playerLimit: 4,
      date: "May 19 2022",
    },
    {
      name: "Crown of the Kobold King",
      system: "Pathfinder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 4,
      date: "May 15 2022",
    },
    {
      name: "Medusa in the Sleeping Garden",
      system: "Mork Borg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 12,
      date: "May 18 2022",
    },
    {
      name: "Slow Sleigh to Plankton Downs",
      system: "Troika",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 120,
      playerLimit: 6,
      date: "May 22 2022",
    },
    {
      name: "The Children of Fear",
      system: "Call of Cthulhu",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 180,
      playerLimit: 10,
      date: "May 23 2022",
    },
    {
      name: "Junkers Delight",
      system: "Starfinder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      duration: 180,
      playerLimit: 8,
      date: "May 25 2022",
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
