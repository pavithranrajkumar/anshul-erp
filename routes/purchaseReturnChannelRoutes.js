const express = require('express');
const controller = require('../controllers/purchaseReturnChannelController');

const router = express.Router();

router.post('/', controller.createPurchaseReturnChannel);
router.get('/', controller.getAllPurchaseReturnChannels);
router.get('/:id', controller.getPurchaseReturnChannelById);
router.put('/:id', controller.updatePurchaseReturnChannel);
router.delete('/:id', controller.deletePurchaseReturnChannel);

module.exports = router;
