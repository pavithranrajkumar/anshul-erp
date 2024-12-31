const POSInvoice = require('../models/posInvoiceModel');

exports.createInvoice = async (req, res) => {
    try {
        const data = req.body;
        const result = await POSInvoice.createInvoice(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating invoice:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await POSInvoice.getAllInvoices();
        res.status(200).json({ status: 'success', data: invoices });
    } catch (error) {
        console.error('Error fetching invoices:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getInvoiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const invoice = await POSInvoice.getInvoiceById(id);
        if (!invoice) {
            return res.status(404).json({ status: 'error', message: 'Invoice not found' });
        }
        res.status(200).json({ status: 'success', data: invoice });
    } catch (error) {
        console.error('Error fetching invoice:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateInvoice = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await POSInvoice.updateInvoice(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Invoice not found' });
        }
        res.status(200).json({ status: 'success', message: 'Invoice updated successfully' });
    } catch (error) {
        console.error('Error updating invoice:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteInvoice = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await POSInvoice.deleteInvoice(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Invoice not found' });
        }
        res.status(200).json({ status: 'success', message: 'Invoice deleted successfully' });
    } catch (error) {
        console.error('Error deleting invoice:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
