const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    id: String,
    name: String,
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
