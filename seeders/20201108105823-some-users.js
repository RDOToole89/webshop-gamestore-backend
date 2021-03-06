"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Roibin",
          lastName: "O'Toole",
          email: "roibinotoole@gmail.com",
          password: "test",
          phone: "+31643709061",
          address: "Jan Cupidohof 17",
          city: "Amsterdam",
          postalcode: "1064 GS",
          country: "The Netherlands",
          isAdmin: true,
          newsletter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Arjuna",
          lastName: "Munzer",
          email: "arjunamunzer@gmail.com",
          password: "test",
          phone: "+31643749341",
          address: "Uiterwaardenstraat 280",
          city: "Amsterdam",
          postalcode: "1079 DA",
          country: "The Netherlands",
          isAdmin: false,
          newsletter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Gabriella",
          lastName: "Croiset",
          email: "gabriellacroiset@gmail.com",
          password: "test",
          phone: "+31682739561",
          address: "Loevestein 191",
          city: "Amsterdam",
          postalcode: "1082 XH",
          country: "The Netherlands",
          isAdmin: false,
          newsletter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
