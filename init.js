const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection successful");
    return seedChats(); // call seed function after connection
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

async function seedChats() {
  // Remove existing chats first
  await Chat.deleteMany({});

  let allChats = [
    {
      from: "nehma",
      to: "preeti",
      msg: "send me notes for exam",
      created_at: new Date(),
    },
    {
      from: "rohit",
      to: "mohit",
      msg: "teach me JS callbacks",
      created_at: new Date(),
    },
    {
      from: "amit",
      to: "sumit",
      msg: "all the best",
      created_at: new Date(),
    },
    {
      from: "anita",
      to: "ramesh",
      msg: "bring some fruits",
      created_at: new Date(),
    },
    {
      from: "tony",
      to: "peter",
      msg: "love you 3000",
      created_at: new Date(),
    },
    {
      from: "neha",
      to: "priya",
      msg: "send me your exam sheets",
      created_at: new Date(),
    }
  ];

  await Chat.insertMany(allChats);
  console.log("Database seeded successfully!");
}
