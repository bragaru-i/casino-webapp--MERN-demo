const path = require('path');
require('dotenv').config({ path: path.join('config.env') });

process.on('uncaughtException', (err) => {
  console.log('***UNCAUGHT EXCEPTION ON SERVER***');

  console.log(`${err.name} => ${err.message}`);
  process.exit(1);
});

const app = require('./app');

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
//setting DB and connecting to server
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD_DATABASE);
const DB_LOCAL = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('***DB connected succesfully***');
  })
  .catch((err) => console.log('***Not logged DB***', err));

// console.log(`***You're currently run in ${process.env.NODE_ENV} mode***`);

// listening port again
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`***Server started on ${port} port ...***`);
});

process.on('unhandledRejection', (err) => {
  console.log('***UNHANDLED REJECTION ON SERVER***');
  console.log(`${err.name} => ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
