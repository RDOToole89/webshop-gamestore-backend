"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("productComments", [
      {
        productId: 2,
        userId: 1,
        text: "Awesome product A+",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        userId: 2,
        text: "I am a Playstation fanboy fuck Xbox!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        userId: 3,
        text: "This things sucks can I return it?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        userId: 3,
        text: "PS5 is great love it!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        userId: 1,
        text: "So happy! Fast delivery!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        userId: 3,
        text: "OMG this is like so cool! Omg amazeballs!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productComments", null, {});
  },
};
