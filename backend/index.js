import express from 'express';
import { config } from 'dotenv';
import connectionToDB from './database/dbConnection.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
config();

const PORT = process.env.PORT;
// cookie is a small piece of data sent from a website and saved on your device, which helps keeping you logged in,

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRouter);

// localhost:4000/user/register

app.listen(PORT, async () => {
  await connectionToDB()
  console.log(`App is running on ${PORT}`)
})
