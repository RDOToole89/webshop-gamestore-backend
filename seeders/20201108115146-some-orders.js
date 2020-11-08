"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};

// {
//   userId: DataTypes.INTEGER,
//   orderDate: DataTypes.DATE,
// },
