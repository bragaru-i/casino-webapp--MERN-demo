const mongoose = require('mongoose');
const validator = require('validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const playerSchema = new mongoose.Schema(
  {
    cId: {
      type: String,
    },
    firstName: {
      type: String,
      minlength: 2,
      trim: true,
      required: [true, 'A player must have a first name'],
    },
    lastName: {
      trim: true,
      type: String,
      minlength: 2,
      required: [true, 'A player must have a last name'],
    },
    country: {
      type: String,
      required: [true, 'A player must have a country'],
    },
    avatar: {
      type: String,
      required: [true, 'A player must have a avatar'],
    },
    visits: {
      type: [Date],
    },
    registerDate: {
      type: Date,
      default: Date.now(),
      select: false,
    },

    birthday: {
      type: Date,
      required: [true, 'A player must have a birthday'],
    },

    cardType: {
      type: String,
      enum: {
        values: ['classic', 'gold', 'platinum'],
        message: 'Card type is either: classic, gold, platinum',
      },
      required: true,
    },
    casinoId: {
      type: Number,
      select: false,
    },
    phone: {
      type: Number,
    },
    // transactions: [
    //   {
    //     transaction: {
    //       type: mongoose.Schema.ObjectId,
    //       ref: 'Transaction',
    //     },
    //     default: {},
    //   },
    // ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// playerSchema.virtual('totalVisits').get(function() {
//   return this.visits.length;
// });
//DOCUMENT MIDDLEWARE
playerSchema.plugin(autoIncrement.plugin, {
  model: 'Player',
  field: 'casinoId',
});
playerSchema.pre('save', function (next) {
  this.cId = this.casinoId + '';
  next();
});
// playerSchema.virtual('fullname').get(function() {
//   return this.firstName + ' ' + this.lastName;
// });

// ADDING VIRTUALS FOR CHIPS

// Virtual populate player with Chips:
playerSchema.virtual('transactions.transaction', {
  ref: 'Transaction',
  foreignField: 'player',
  localField: '_id',
});

playerSchema.index({ firstName: 1, lastName: 1, cId: -1 });
const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
