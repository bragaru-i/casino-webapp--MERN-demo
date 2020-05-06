const Player = require('../models/playerModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPlayers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Player.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paginate();
  const players = await features.query;
  res.status(200).json({
    data: players,
  });
});

exports.createPlayer = catchAsync(async (req, res, next) => {
  const player = await Player.create(req.body);
  res.status(201).json({
    data: player,
  });
});
exports.updatePlayer = catchAsync(async (req, res, next) => {
  const updated = !req.body.transactions
    ? await Player.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
    : await Player.findByIdAndUpdate(req.params.id, {
        $push: { transactions: req.body.transactions },
      });
  if (!updated) return next(new AppError('No player found with this id', 404));
  res.status(200).json({
    updated,
  });
});

exports.getPlayer = catchAsync(async (req, res, next) => {
  const player = await Player.findById(req.params.id).populate(
    'transactions.transaction'
  );
  if (!player) return next(new AppError('No player found with this id', 404));
  res.status(200).json({
    data: player,
  });
});

exports.deletePlayer = catchAsync(async (req, res, next) => {
  const toDelete = await Player.findByIdAndDelete(req.params.id);
  if (!toDelete) return next(new AppError('No player found with this id', 404));

  res.status(204).json({
    status: 'succes',
  });
});
