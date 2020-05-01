const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Allowing everyone to use API
app.use(cors());

//  protect cors
// app.use( cors ({
//   origin: 'https://www.mypage.com'
// }))

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
app.use(express.json());
// loading routes
const playerRouter = require('./routes/playerRoute');
const tableRouter = require('./routes/tableRoute');
const transactionRouter = require('./routes/transactionRoute');
const compression = require('compression');
// if in dev mode.. runs morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(compression());
// mounting player routes
app.use('/api/v1/players', playerRouter);

// mounting tables routes
app.use('/api/v1/tables', tableRouter);

//mounting transactions Route
app.use('/api/v1/transactions', transactionRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
