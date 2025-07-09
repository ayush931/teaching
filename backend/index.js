// express -> backend -> write and run

const express = require('express');

const app = express();

// app.get("/address", function() {
//  what is the task
// })

app.get("/ping", (req, res) => {
  res.send("pong")
})

app.listen(4000,() => {
  console.log("App is running")
})