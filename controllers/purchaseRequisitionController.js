const PurchaseRequisition = require('../models/purchaseRequisitionModel');

// Create a new purchase requisition
exports.createPurchaseRequisition = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseRequisition.createPurchaseRequisition(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase requisition:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all purchase requisitions
exports.getAllPurchaseRequisitions = async (req, res) => {
    try {
        const requisitions = await PurchaseRequisition.getAllPurchaseRequisitions();
        res.status(200).json({ status: 'success', data: requisitions });
    } catch (error) {
        console.error('Error fetching purchase requisitions:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a purchase requisition by ID
exports.getPurchaseRequisitionById = async (req, res) => {
    try {
        const id = req.params.id;
        const requisition = await PurchaseRequisition.getPurchaseRequisitionById(id);
        if (!requisition) {
            return res.status(404).json({ status: 'error', message: 'Requisition not found' });
        }
        res.status(200).json({ status: 'success', data: requisition });
    } catch (error) {
        console.error('Error fetching requisition:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a purchase requisition by ID
exports.updatePurchaseRequisition = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseRequisition.updatePurchaseRequisition(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Requisition not found' });
        }
        res.status(200).json({ status: 'success', message: 'Requisition updated successfully' });
    } catch (error) {
        console.error('Error updating requisition:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a purchase requisition by ID
exports.deletePurchaseRequisition = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseRequisition.deletePurchaseRequisition(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Requisition not found' });
        }
        res.status(200).json({ status: 'success', message: 'Requisition deleted successfully' });
    } catch (error) {
        console.error('Error deleting requisition:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
