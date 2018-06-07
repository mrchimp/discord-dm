'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    lives: DataTypes.INTEGER,
    location: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};