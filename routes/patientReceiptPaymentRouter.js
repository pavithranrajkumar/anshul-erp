const express = require('express');
const patientReceiptPaymentController = require('../controllers/patientReceiptPaymentController');

const router = express.Router();

router.post('/', patientReceiptPaymentController.createPaymentReceipt);
router.get('/', patientReceiptPaymentController.getAllPaymentReceipts);
router.get('/:id', patientReceiptPaymentController.getPaymentReceiptById);
router.put('/:id', patientReceiptPaymentController.updatePaymentReceipt);
router.delete('/:id', patientReceiptPaymentController.deletePaymentReceipt);

module.exports = router;
