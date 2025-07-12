import express from 'express';
import { config } from 'dotenv';
import databaseConnection from './database/dbConnection.js';
config();

const app = express();

const BACKEND_PORT = process.env.PORT

app.listen(BACKEND_PORT, async () => {
  await databaseConnection();
  console.log(`App is running on ${BACKEND_PORT}`)
})