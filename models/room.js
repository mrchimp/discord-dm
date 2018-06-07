'use strict';
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    exit_north: DataTypes.BOOLEAN,
    exit_south: DataTypes.BOOLEAN,
    exit_west: DataTypes.BOOLEAN,
    exit_east: DataTypes.BOOLEAN
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};