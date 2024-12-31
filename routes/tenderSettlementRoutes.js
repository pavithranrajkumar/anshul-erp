const express = require('express');
const tenderSettlementController = require('../controllers/tenderSettlementController');

const router = express.Router();

router.post('/', tenderSettlementController.createSettlement);
router.get('/', tenderSettlementController.getAllSettlements);
router.get('/:id', tenderSettlementController.getSettlementById);
router.put('/:id', tenderSettlementController.updateSettlement);
router.delete('/:id', tenderSettlementController.deleteSettlement);

module.exports = router;
