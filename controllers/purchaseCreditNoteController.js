const PurchaseCreditNote = require('../models/purchaseCreditNoteModel');

exports.createPurchaseCreditNote = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseCreditNote.createPurchaseCreditNote(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase credit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPurchaseCreditNotes = async (req, res) => {
    try {
        const notes = await PurchaseCreditNote.getAllPurchaseCreditNotes();
        res.status(200).json({ status: 'success', data: notes });
    } catch (error) {
        console.error('Error fetching purchase credit notes:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPurchaseCreditNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await PurchaseCreditNote.getPurchaseCreditNoteById(id);
        if (!note) {
            return res.status(404).json({ status: 'error', message: 'Purchase credit note not found' });
        }
        res.status(200).json({ status: 'success', data: note });
    } catch (error) {
        console.error('Error fetching purchase credit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePurchaseCreditNote = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseCreditNote.updatePurchaseCreditNote(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase credit note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase credit note updated successfully' });
    } catch (error) {
        console.error('Error updating purchase credit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePurchaseCreditNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseCreditNote.deletePurchaseCreditNote(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase credit note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase credit note deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase credit note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
