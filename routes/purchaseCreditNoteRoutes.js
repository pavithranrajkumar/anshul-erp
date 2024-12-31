const express = require('express');
const controller = require('../controllers/purchaseCreditNoteController');

const router = express.Router();

router.post('/', controller.createPurchaseCreditNote);
router.get('/', controller.getAllPurchaseCreditNotes);
router.get('/:id', controller.getPurchaseCreditNoteById);
router.put('/:id', controller.updatePurchaseCreditNote);
router.delete('/:id', controller.deletePurchaseCreditNote);

module.exports = router;
