const express = require('express');
const controller = require('../controllers/purchaseInvoiceController');

const router = express.Router();

// Define all routes for the purchase invoice module
router.post('/', controller.createPurchaseInvoice);
router.get('/', controller.getAllPurchaseInvoices);
router.get('/:id', controller.getPurchaseInvoiceById);
router.put('/:id', controller.updatePurchaseInvoice);
router.delete('/:id', controller.deletePurchaseInvoice);

module.exports = router;
