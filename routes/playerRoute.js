const express = require('express');
const playerController = require('../controllers/playerController');
const transactionRouter = require('./transactionRoute');
const router = express.Router({ mergeParams: true });

//passing chips from player
router.use('/:playerId/transactions', transactionRouter);

router
  .route('/')
  .get(playerController.getAllPlayers)
  .post(playerController.createPlayer);

router
  .route('/:id')
  .patch(playerController.updatePlayer)
  .get(playerController.getPlayer)
  .delete(playerController.deletePlayer);

module.exports = router;
