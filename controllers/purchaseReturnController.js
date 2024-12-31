const PurchaseReturn = require('../models/purchaseReturnModel');

exports.createPurchaseReturn = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseReturn.createPurchaseReturn(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase return:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPurchaseReturns = async (req, res) => {
    try {
        const returns = await PurchaseReturn.getAllPurchaseReturns();
        res.status(200).json({ status: 'success', data: returns });
    } catch (error) {
        console.error('Error fetching purchase returns:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPurchaseReturnById = async (req, res) => {
    try {
        const id = req.params.id;
        const returnData = await PurchaseReturn.getPurchaseReturnById(id);
        if (!returnData) {
            return res.status(404).json({ status: 'error', message: 'Purchase return not found' });
        }
        res.status(200).json({ status: 'success', data: returnData });
    } catch (error) {
        console.error('Error fetching purchase return:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePurchaseReturn = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseReturn.updatePurchaseReturn(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase return not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase return updated successfully' });
    } catch (error) {
        console.error('Error updating purchase return:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePurchaseReturn = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseReturn.deletePurchaseReturn(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase return not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase return deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase return:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
