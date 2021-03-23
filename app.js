require('dotenv/config');
const express = require('express');
const route = require('./router');

const app = express();

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route)
app.use((req, res, next) => {
 res.status(404).send({
 status: 404,
 error: `Not found`
 })
})

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${err.message}`)
  process.exit(1)
})

// * Start * //
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);