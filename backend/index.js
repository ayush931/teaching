import express from 'express';
import { config } from 'dotenv';
import databaseConnection from './database/dbConnection.js';
import UserModel from './models/user.model.js';
config();

const app = express();
app.use(express.json());

const BACKEND_PORT = process.env.PORT

// register user

// app.post("/register", async (req, res) => {
//   const username = req.body.name   // json
//   const useremail = req.body.email
//   const userpassword = req.body.password

//   await UserModel.create({
//     name: username,
//     email: useremail,
//     password: userpassword
//   })

//   res.send("Registration successfull")
// })

app.listen(BACKEND_PORT, async () => {
  await databaseConnection();
  console.log(`App is running on ${BACKEND_PORT}`)
})