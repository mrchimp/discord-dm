require('dotenv').load();
const Game = require('./Game');

const token = process.env.DISCORD_TOKEN;

const models = require('./Models');

if (!token) {
  console.log('You need to set DISCORD_TOKEN. Maybe in .env.');
  process.exit();
}

const game = new Game(token);
