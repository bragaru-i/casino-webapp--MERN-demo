const mongoose = require('mongoose');
const dtfUS = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
const floatSchema = new mongoose.Schema({
  c5000: { type: Number, default: 0 },
  c1000: { type: Number, default: 0 },
  c500: { type: Number, default: 0 },
  c100: { type: Number, default: 0 },
  c25: { type: Number, default: 0 },
  c5: { type: Number, default: 0 },
  c2half: { type: Number, default: 0 },
  c1: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
});

const tableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A table must have a name'],
    },
    float: { type: floatSchema, required: [true, 'Please enter float'] },

    tId: {
      type: String,
      required: [true, 'A table must have it own ID'],
      unique: true,
    },
    players: [
      {
        player: {
          type: mongoose.Schema.ObjectId,
          ref: 'Player',
        },
      },
    ],
    inactive: [
      {
        player: {
          type: mongoose.Schema.ObjectId,
          ref: 'Player',
        },
      },
    ],

    cashDrop: [
      {
        amount: Number,
        player: {
          type: mongoose.Schema.ObjectId,
          ref: 'Player',
        },
        date: { type: Date, required: true, default: dtfUS.format(Date.now()) },
      },
    ],

    counts: [
      {
        date: { type: Date, required: true, default: dtfUS.format(Date.now()) },
        count: {
          type: floatSchema,
          required: [true, 'Enter float please'],
        },
        total: {
          type: Number,
          default: 0,
        },
        game: {
          type: String,
          default: 'Other',
          enum: {
            values: ['AR', 'BJ', 'RP', 'TRIO', '6C', 'UP', 'TP', 'Other'],
            message: 'You must specify only related type of game, or leave on: Other',
          },
          floatMinusOpening: { type: Number, default: 0 },
          floatMinusPrevCount: { type: Number, default: 0 },
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//  Virtual populate table with chips
// tableSchema.virtual('transactions', {
//   ref: 'Transaction',
//   foreignField: 'table',
//   localField: '_id',
//   select: '-__v'
// });

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;
