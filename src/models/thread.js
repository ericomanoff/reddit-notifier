"use strict";
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define(
    "Thread",
    {
      url: DataTypes.STRING,
    },
    {}
  );
  Thread.associate = function (models) {
    // associations can be defined here
    Thread.belongsToMany(models.User, {
      through: "UserThreads",
    });
  };
  return Thread;
};
