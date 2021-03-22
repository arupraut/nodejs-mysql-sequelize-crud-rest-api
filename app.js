require('dotenv/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const route = require('./router');
const db = require("./src/task/model");


const app = express();

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route)
// db.sequelize.sync();

// * Start * //
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);