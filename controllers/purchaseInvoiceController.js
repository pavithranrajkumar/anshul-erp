const PurchaseInvoice = require('../models/purchaseInvoiceModel');

// Create a new purchase invoice from order
exports.createPurchaseInvoice = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseInvoice.createPurchaseInvoice(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase invoice:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all purchase invoices
exports.getAllPurchaseInvoices = async (req, res) => {
    try {
        const invoices = await PurchaseInvoice.getAllPurchaseInvoices();
        res.status(200).json({ status: 'success', data: invoices });
    } catch (error) {
        console.error('Error fetching purchase invoices:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a purchase invoice by ID
exports.getPurchaseInvoiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const invoice = await PurchaseInvoice.getPurchaseInvoiceById(id);
        if (!invoice) {
            return res.status(404).json({ status: 'error', message: 'Purchase invoice not found' });
        }
        res.status(200).json({ status: 'success', data: invoice });
    } catch (error) {
        console.error('Error fetching purchase invoice:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a purchase invoice by ID
exports.updatePurchaseInvoice = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseInvoice.updatePurchaseInvoice(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase invoice not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase invoice updated successfully' });
    } catch (error) {
        console.error('Error updating purchase invoice:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a purchase invoice by ID
exports.deletePurchaseInvoice = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseInvoice.deletePurchaseInvoice(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase invoice not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase invoice deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase invoice:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
