const express = require('express');
const tableController = require('../controllers/tableController');
const transactionRouter = require('./transactionRoute');
const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(tableController.getAllTables)
  .post(tableController.createTable);

router
  .route('/:id')
  .patch(tableController.updateTable)
  .get(tableController.getTable)
  .delete(tableController.deleteTable);

router.use('/:tableId/transactions', transactionRouter);
// routing add players at tables, remove from active and so on
module.exports = router;
