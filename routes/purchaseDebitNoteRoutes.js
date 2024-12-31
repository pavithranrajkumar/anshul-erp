const express = require('express');
const controller = require('../controllers/purchaseDebitNoteController');

const router = express.Router();

router.post('/', controller.createPurchaseDebitNote);
router.get('/', controller.getAllPurchaseDebitNotes);
router.get('/:id', controller.getPurchaseDebitNoteById);
router.put('/:id', controller.updatePurchaseDebitNote);
router.delete('/:id', controller.deletePurchaseDebitNote);

module.exports = router;
