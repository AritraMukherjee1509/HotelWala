const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;
