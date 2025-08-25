import mongoose from "mongoose";

async function connectionToDB () {
  const connection = await mongoose.connect(process.env.MONGO_URI)

  if (connection) {
    console.log('DB is connected')
  }
  else {
    console.log('DB connection failed!!!')
  }
}

export default connectionToDB;