const Table = require('../models/tableModel');
const Transaction = require('../models/transactionModel');
const Player = require('../models/playerModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const countChip = require('../utils/countChips');

exports.createTable = catchAsync(async (req, res, next) => {
  const table = await Table.create(req.body);
  res.status(201).json({
    data: table,
  });
});
exports.getAllTables = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Table.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paginate();
  const tables = await features.query;
  res.status(200).json({
    results: tables.length,
    data: tables,
  });
});

// update table works only with adding players
exports.updateTable = catchAsync(async (req, res, next) => {
  let updated = await Table.findById(req.params.id);
  if (!updated) return next(new AppError('No table found with this id', 404));

  //working with players and inactive
  if (req.body.players) {
    updated.players = updated.players || [];

    // If player is added to table = return error

    for (let item of updated.players) {
      if (item.player == req.body.players.player) {
        return next(new AppError('This player is already added to table', 404));
      }
    }

    updated.players.push(req.body.players);

    let transaction = await Transaction.create({
      table: req.params.id,
      player: req.body.players.player,
    });
    transaction.save();
    let player = await Player.findById(req.body.players.player);
    // player.transactions = player.transactions || [];
    // player.transactions.push(transaction._id);
    player.save();
  }
  if (req.body.inactive) {
    updated.inactive = updated.inactive || [];
    updated.inactive.push(req.body.inactive);
  }
  //  finished with players

  // counts:!
  if (req.body.counts) {
    updated.counts = updated.counts || [];
    let newCount = req.body.counts;
    newCount.total = countChip(newCount.count);
    updated.counts.push(newCount);
  }
  // add to float:
  if (req.body.float) {
    let addToFloat = req.body.float;
    Object.keys(addToFloat).forEach(
      (chip) => (updated.float[chip] += addToFloat[chip] * 1)
    );
  }
  updated.save();
  res.status(200).json({
    status: 'succes',
    table: updated,
  });
});

exports.getTable = catchAsync(async (req, res, next) => {
  const table = await Table.findById(req.params.id)
    .populate({
      path: 'players.player',
      select: '-id -__v',
      populate: {
        path: 'transactions.transaction',
        select: ' -table  -__v',
      },
    })
    .select('-__v');

  if (!table) return next(new AppError('No table found with this id', 404));
  res.status(200).json({
    status: 'succes',
    data: table,
  });
});

exports.deleteTable = catchAsync(async (req, res, next) => {
  const toDelete = await Table.findByIdAndDelete(req.params.id);
  if (!toDelete) return next(new AppError('No table found with this id', 404));

  res.status(204).json({
    status: 'succes',
  });
});
