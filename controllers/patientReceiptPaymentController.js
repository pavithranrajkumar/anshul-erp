const PatientReceiptPayment = require('../models/patientReceiptPaymentModel');

exports.createPaymentReceipt = async (req, res) => {
    try {
        const data = req.body;
        const result = await PatientReceiptPayment.createPaymentReceipt(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating payment receipt:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPaymentReceipts = async (req, res) => {
    try {
        const receipts = await PatientReceiptPayment.getAllPaymentReceipts();
        res.status(200).json({ status: 'success', data: receipts });
    } catch (error) {
        console.error('Error fetching payment receipts:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPaymentReceiptById = async (req, res) => {
    try {
        const id = req.params.id;
        const receipt = await PatientReceiptPayment.getPaymentReceiptById(id);
        if (!receipt) {
            return res.status(404).json({ status: 'error', message: 'Payment receipt not found' });
        }
        res.status(200).json({ status: 'success', data: receipt });
    } catch (error) {
        console.error('Error fetching payment receipt:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePaymentReceipt = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PatientReceiptPayment.updatePaymentReceipt(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Payment receipt not found' });
        }
        res.status(200).json({ status: 'success', message: 'Payment receipt updated successfully' });
    } catch (error) {
        console.error('Error updating payment receipt:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePaymentReceipt = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PatientReceiptPayment.deletePaymentReceipt(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Payment receipt not found' });
        }
        res.status(200).json({ status: 'success', message: 'Payment receipt deleted successfully' });
    } catch (error) {
        console.error('Error deleting payment receipt:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
