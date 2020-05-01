const catchAsync = require('./catchAsync');
const Table = require('../models/tableModel');
const filterUpdate = catchAsync(async (req, res, next) => {
  const { activePlayers, cashLog, float } = req.body;
  const keys = Object.keys(float)[0];
  const values = Object.values(float)[0];
  let updated = activePlayers
    ? await Table.findByIdAndUpdate(
        req.params.id,
        { $push: { activePlayers } },
        { new: true, runValidators: true, upsert: true }
      )
    : cashLog
    ? await Table.findByIdAndUpdate(
        req.params.id,
        { $push: { cashLog } },
        { new: true, runValidators: true, upsert: true }
      )
    : float
    ? await Table.findByIdAndUpdate(
        req.params.id,
        { $set: { ss: 99 } },
        { new: true, runValidators: true, upsert: true }
      )
    : req.body;
  res.status(200).json({
    message: 'updated',
    table: updated,
  });
});
module.exports = filterUpdate;
