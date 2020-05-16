const mongoose = require('mongoose');
const dtfUS = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
const transactionSchema = new mongoose.Schema(
  {
    table: {
      type: mongoose.Schema.ObjectId,
      ref: 'Table',
      required: [true, 'A transaction must belong to a table'],
    },
    player: {
      type: mongoose.Schema.ObjectId,
      ref: 'Player',
      required: [true, 'A transaction requires a player'],
    },
    chipIn: {
      c5000: { type: Number, default: 0 },
      c1000: { type: Number, default: 0 },
      c500: { type: Number, default: 0 },
      c100: { type: Number, default: 0 },
      c25: { type: Number, default: 0 },
      c5: { type: Number, default: 0 },
      c2half: { type: Number, default: 0 },
      c1: { type: Number, default: 0 },
      bonus: { type: Number, default: 0 },
    },
    chipOut: {
      c5000: { type: Number, default: 0 },
      c1000: { type: Number, default: 0 },
      c500: { type: Number, default: 0 },
      c100: { type: Number, default: 0 },
      c25: { type: Number, default: 0 },
      c5: { type: Number, default: 0 },
      c2half: { type: Number, default: 0 },
      c1: { type: Number, default: 0 },
      bonus: { type: Number, default: 0 },
    },

    cash: {
      amount: { type: Number, default: 0 },

      log: [{ amount: Number, date: Date }],
    },
    result: {
      type: Number,
      default: 0,
      required: true,
    },
    isPlaying: { type: Boolean, default: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// transactionSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'player',
//     select: 'casinoId firstName lastName'
//   });
//   next();
// });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
