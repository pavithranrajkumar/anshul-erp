const BillPayment = require('../models/billPaymentModel');

// Create a new bill payment
exports.createBillPayment = async (req, res) => {
    try {
        const data = req.body;
        const result = await BillPayment.createBillPayment(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating bill payment:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all bill payments
exports.getAllBillPayments = async (req, res) => {
    try {
        const payments = await BillPayment.getAllBillPayments();
        res.status(200).json({ status: 'success', data: payments });
    } catch (error) {
        console.error('Error fetching bill payments:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a bill payment by ID
exports.getBillPaymentById = async (req, res) => {
    try {
        const id = req.params.id;
        const payment = await BillPayment.getBillPaymentById(id);
        if (!payment) {
            return res.status(404).json({ status: 'error', message: 'Bill payment not found' });
        }
        res.status(200).json({ status: 'success', data: payment });
    } catch (error) {
        console.error('Error fetching bill payment:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a bill payment by ID
exports.updateBillPayment = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await BillPayment.updateBillPayment(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Bill payment not found' });
        }
        res.status(200).json({ status: 'success', message: 'Bill payment updated successfully' });
    } catch (error) {
        console.error('Error updating bill payment:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a bill payment by ID
exports.deleteBillPayment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BillPayment.deleteBillPayment(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Bill payment not found' });
        }
        res.status(200).json({ status: 'success', message: 'Bill payment deleted successfully' });
    } catch (error) {
        console.error('Error deleting bill payment:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
