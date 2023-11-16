const mongoose = require("mongoose");

const Connectdb = async () => {
  try {
    await mongoose.connect("mongo://localhost:27017/mydatabase", {
      useNewUrlParse: true,
      useNewUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    
    console.log(err);
  }
};

model.exports = Connectdb;
