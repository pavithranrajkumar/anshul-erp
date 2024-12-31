const express = require('express');
const purchaseSetupController = require('../controllers/purchaseSetupController');

const router = express.Router();

router.post('/', purchaseSetupController.createPurchaseSetup);
router.get('/', purchaseSetupController.getPurchaseSetups);
router.get('/:id', purchaseSetupController.getPurchaseSetupById);
router.put('/:id', purchaseSetupController.updatePurchaseSetup);
router.delete('/:id', purchaseSetupController.deletePurchaseSetup);

module.exports = router;
