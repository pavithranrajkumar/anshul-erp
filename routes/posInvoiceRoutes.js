const express = require('express');
const posInvoiceController = require('../controllers/posInvoiceController');

const router = express.Router();

router.post('/', posInvoiceController.createInvoice);
router.get('/', posInvoiceController.getAllInvoices);
router.get('/:id', posInvoiceController.getInvoiceById);
router.put('/:id', posInvoiceController.updateInvoice);
router.delete('/:id', posInvoiceController.deleteInvoice);

module.exports = router;
