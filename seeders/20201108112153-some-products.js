"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          productName: "Razer BlackShark V2 Gaming Headset",
          description:
            "THX 7.1 Surround Sound Capable: Provides industry-leading audio realism for maximum in-game immersion",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51jmB3ciUhL._AC_SL1500_.jpg",
          supplierId: null,
          categoryId: 5,
          unit: 1,
          price: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "PlayStation 5 Console",
          description:
            "Stunning Games - Marvel at incredible graphics and experience new PS5 features. ",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
          supplierId: null,
          categoryId: 2,
          unit: 1,
          price: 599,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Xbox Series X Console",
          description:
            "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X. ",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51A41nLe5IL._SL1200_.jpg",
          supplierId: null,
          categoryId: 3,
          unit: 1,
          price: 499,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Nintendo Switch Console",
          description:
            "Includes a Switch console, Switch dock, Joy-Con (L) and Joy-Con (R), 2 Joy-Con strap accessories, 1 Joy-Con grip, AC adapter, HDMI cable.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg",
          supplierId: null,
          categoryId: 4,
          unit: 1,
          price: 399,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Assassin’s Creed Valhalla",
          description: "Lead epic Viking raids against Saxon troops and fortresses.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81hN53GTfqL._SL1500_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 59.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Call of Duty: Black Ops Cold War",
          description:
            "As Elite operatives, you will Follow the trail of a shadowy Figure named perseus who is on a mission to destabilize the global balance of power and change the course of history.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81PRlnwbFoL._SL1378_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 59.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Marvel's Spider-Man: Miles Morales",
          description:
            "Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71bqboqDUiL._SL1361_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 69.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Watch Dogs Legion",
          description:
            "Recruit and play as anyone from London. Everyone you see has a unique backstory, personality, and skill set for unique situations",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 49.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Demon’s Souls",
          description:
            "Discover where the journey began - Experience the original brutal challenge, completely remade from the ground up. All presented in stunning visual quality with enhanced performance, this is the world of Boletaria as you have never seen it before. ",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81QoNRp5%2BWL._SL1353_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 69.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Ghost of Tsushima",
          description:
            "Available Now - Ghost of Tsushima: Legends, a new cooperative multiplayer* experience inspired by Japanese folk tales and mythology.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81Bzm37TIaL._SL1500_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 59.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "FIFA 21",
          description:
            "FIFA Ultimate Team Ambassador Player Pick – Choose 1 of 3 player items for 3 matches.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81EWBpGwbKL._SL1500_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 59.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Crash 4: It's About Time",
          description:
            "Crash is back and it's about time! New abilities, more playable character and alernate dimensions smothered in a thick layer of awesome sauce.",
          imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71NQi4XJzbL._SL1489_.jpg",
          supplierId: null,
          categoryId: 1,
          unit: 1,
          price: 59.99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
