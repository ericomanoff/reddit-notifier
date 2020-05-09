"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "Users",
          "id",
          {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Users",
          "createdAt",
          {
            type: Sequelize.DataTypes.DATE,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "Users",
          "updatedAt",
          {
            type: Sequelize.DataTypes.DATE,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("Users", "id", { transaction: t }),
        queryInterface.removeColumn("Users", "createdAt", { transaction: t }),
        queryInterface.removeColumn("Users", "updatedAt", { transaction: t }),
      ]);
    });
  },
};
