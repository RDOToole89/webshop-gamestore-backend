"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "newsletter", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "newsletter");
  },
};
