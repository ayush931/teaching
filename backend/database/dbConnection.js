import mongoose from "mongoose";

async function databaseConnection() {
  const connection = await mongoose.connect(process.env.MONGODB_URL)

  if (connection) {
    console.log("DB is connected")
  }
  else {
    console.log("DB is not connected")
  }
}

export default databaseConnection;