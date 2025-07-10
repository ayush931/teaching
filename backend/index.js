// express -> backend -> write and run

const express = require('express');

const app = express();
app.use(express.json());

// app.get("/address", function() {
//  what is the task
// })

app.get("/ping", (req, res) => {
  res.send("pong")
})

// params, query -> take the data through the route
// params -> take the data through the route in "/" form

app.get("/num/:num1/:num2", (req, res) => {
  const { num1 } = req.params;
  const { num2 } = req.params;

  const sum = parseInt(num1) + parseInt(num2);
  res.send(sum)
})

// query -> takes data through route in ? form

app.get("/summ", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  const sum = parseInt(num1) + parseInt(num2);
  res.send(sum)
})


// body -> take data as json
app.get("/sums", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  const sum = parseInt(num1) + parseInt(num2);
  res.send(sum);
})

app.listen(4000, () => {
  console.log("App is running")
})