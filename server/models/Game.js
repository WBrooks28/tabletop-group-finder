const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  // },
  duration: {
    type: String,
    required: true,
  },
  playerLimit: {
    type: Number,
    min: 0,
    max: 12,
    default: 0,
  },
  date: {
    type: String,
    min: "2022-05-11",
    max: "2022-08-11",
  },
  system: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
