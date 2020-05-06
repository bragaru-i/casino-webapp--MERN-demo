const catchAsync = require('../utils/catchAsync');
const Transaction = require('../models/transactionModel');
const Table = require('../models/tableModel');
const countChips = require('../utils/countChips');

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  req.body.table = req.body.table || req.params.tableId;
  req.body.player = req.body.player || req.params.playerId;
  Object.keys(req.body).forEach(
    (key) => req.body[key] === undefined && delete req.body[key]
  );
  let transactions = await Transaction.find(req.body);
  res.status(200).json({
    data: transactions,
  });
});

exports.createTransaction = catchAsync(async (req, res, next) => {
  let newTransaction = await Transaction.create(req.body);
  res.status(200).json({
    data: newTransaction,
  });
});

exports.updateTransaction = catchAsync(async (req, res, next) => {
  let transaction = await Transaction.findById(req.params.id);
  let table = await Table.findById(transaction.table);
  let updates = Object.keys(req.body);
  updates.forEach((key) => {
    switch (key) {
      case 'chipIn': {
        let chipsValue = Object.keys(req.body[key]);
        let float = table.float;
        chipsValue.forEach((item) => {
          float[item] = req.body[key][item] * 1 + float[item] * 1;
          let { chipIn, chipOut } = transaction;

          chipIn[item] += req.body[key][item] - chipOut[item];
          if (chipIn[item] >= 0) {
            chipOut[item] = 0;
          } else {
            chipOut[item] = -chipIn[item];
            chipIn[item] = 0;
          }
        });

        break;
      }
      case 'chipOut': {
        let chipsValue = Object.keys(req.body[key]);
        let float = table.float;
        chipsValue.forEach((item) => {
          //  item is chip value
          float[item] = req.body[key][item] * -1 + float[item];
          // chipul care a intrat pe calee:

          let { chipIn, chipOut } = transaction;
          chipIn[item] = chipIn[item] || 0;
          chipOut[item] = chipOut[item] || 0;
          chipOut[item] += req.body[key][item] - chipIn[item];
          if (chipOut[item] >= 0) {
            chipIn[item] = 0;
          } else {
            chipIn[item] = -chipOut[item];
            chipOut[item] = 0;
          }
        });

        break;
      }
      case 'cash': {
        transaction.cash.log = transaction.cash.log || [];
        transaction.cash.amount += req.body[key].amount * 1;
        transaction.cash.log.push(
          `Amount: ${req.body[key].amount} at ${transaction.cash.date}`
        );
        break;
      }
      default:
        console.log('Nothing happened');
    }
  });

  transaction.result = -(
    transaction.cash.amount -
    countChips(transaction.chipOut) +
    countChips(transaction.chipIn)
  );

  transaction.save();
  table.save();
  res.status(200).json({
    data: transaction,
  });
});

exports.deleteTransaction = catchAsync(async (req, res, next) => {
  console.log('Transaction delete method mounted');
  res.status(200).json({
    status: 'succes',
    transactions: 'Delete method mounted',
  });
});
exports.getTransaction = catchAsync(async (req, res, next) => {
  let transaction = await Transaction.findById(req.params.id);
  res.status(200).json({
    data: transaction,
  });
});
