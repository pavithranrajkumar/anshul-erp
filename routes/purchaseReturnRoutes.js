const express = require('express');
const controller = require('../controllers/purchaseReturnController');

const router = express.Router();

router.post('/', controller.createPurchaseReturn);
router.get('/', controller.getAllPurchaseReturns);
router.get('/:id', controller.getPurchaseReturnById);
router.put('/:id', controller.updatePurchaseReturn);
router.delete('/:id', controller.deletePurchaseReturn);

module.exports = router;
