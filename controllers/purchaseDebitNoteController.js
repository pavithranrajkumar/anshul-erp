const PurchaseDebitNote = require('../models/purchaseDebitNoteModel');

exports.createPurchaseDebitNote = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseDebitNote.createPurchaseDebitNote(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase debit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPurchaseDebitNotes = async (req, res) => {
    try {
        const notes = await PurchaseDebitNote.getAllPurchaseDebitNotes();
        res.status(200).json({ status: 'success', data: notes });
    } catch (error) {
        console.error('Error fetching purchase debit notes:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPurchaseDebitNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await PurchaseDebitNote.getPurchaseDebitNoteById(id);
        if (!note) {
            return res.status(404).json({ status: 'error', message: 'Purchase debit note not found' });
        }
        res.status(200).json({ status: 'success', data: note });
    } catch (error) {
        console.error('Error fetching purchase debit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePurchaseDebitNote = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseDebitNote.updatePurchaseDebitNote(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase debit note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase debit note updated successfully' });
    } catch (error) {
        console.error('Error updating purchase debit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePurchaseDebitNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseDebitNote.deletePurchaseDebitNote(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase debit note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase debit note deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase debit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
