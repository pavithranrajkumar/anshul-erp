const express = require('express');
const controller = require('../controllers/purchaseBillController');

const router = express.Router();

router.post('/', controller.createPurchaseBill);
router.get('/', controller.getAllPurchaseBills);
router.get('/:id', controller.getPurchaseBillById);
router.put('/:id', controller.updatePurchaseBill);
router.delete('/:id', controller.deletePurchaseBill);

module.exports = router;
