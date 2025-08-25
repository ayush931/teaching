import express from 'express';
import { config } from 'dotenv';
import connectionToDB from './database/dbConnection.js';
import userRouter from './routes/user.route.js';
config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/user', userRouter);

// localhost:4000/user/register

app.listen(PORT, async () => {
  await connectionToDB()
  console.log(`App is running on ${PORT}`)
})