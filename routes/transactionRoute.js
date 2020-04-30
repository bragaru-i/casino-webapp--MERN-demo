const express = require('express');
const router = express.Router({ mergeParams: true });
const transactionController = require('../controllers/transactionController');
router
  .route('/')
  .get(transactionController.getAllTransactions)
  .post(transactionController.createTransaction);

router
  .route('/:id')
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction)
  .get(transactionController.getTransaction);
module.exports = router;
