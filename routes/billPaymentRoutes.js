const express = require('express');
const controller = require('../controllers/billPaymentController');

const router = express.Router();

// Define all routes for the bill payment module
router.post('/', controller.createBillPayment);
router.get('/', controller.getAllBillPayments);
router.get('/:id', controller.getBillPaymentById);
router.put('/:id', controller.updateBillPayment);
router.delete('/:id', controller.deleteBillPayment);

module.exports = router;
