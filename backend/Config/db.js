const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);

    console.log(
      `Database Connected Successfully ${connection.connection.host} `
    );
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
