"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderDetails",
      [
        {
          orderId: 1,
          productId: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 6,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 7,
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          productId: 4,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          productId: 8,
          quantity: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          productId: 9,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          productId: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          productId: 10,
          quantity: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          productId: 11,
          quantity: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          productId: 12,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderDetails", null, {});
  },
};
