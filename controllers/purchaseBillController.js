const PurchaseBill = require('../models/purchaseBillModel');

exports.createPurchaseBill = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseBill.createPurchaseBill(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase bill:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPurchaseBills = async (req, res) => {
    try {
        const bills = await PurchaseBill.getAllPurchaseBills();
        res.status(200).json({ status: 'success', data: bills });
    } catch (error) {
        console.error('Error fetching purchase bills:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPurchaseBillById = async (req, res) => {
    try {
        const id = req.params.id;
        const bill = await PurchaseBill.getPurchaseBillById(id);
        if (!bill) {
            return res.status(404).json({ status: 'error', message: 'Purchase bill not found' });
        }
        res.status(200).json({ status: 'success', data: bill });
    } catch (error) {
        console.error('Error fetching purchase bill:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePurchaseBill = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseBill.updatePurchaseBill(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase bill not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase bill updated successfully' });
    } catch (error) {
        console.error('Error updating purchase bill:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePurchaseBill = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseBill.deletePurchaseBill(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase bill not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase bill deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase bill:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
