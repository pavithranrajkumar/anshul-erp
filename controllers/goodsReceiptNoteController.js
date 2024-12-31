const GoodsReceiptNote = require('../models/goodsReceiptNoteModel');

exports.createGoodsReceiptNote = async (req, res) => {
    try {
        const data = req.body;
        const result = await GoodsReceiptNote.createGoodsReceiptNote(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating Goods Receipt Note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getGoodsReceiptNotes = async (req, res) => {
    try {
        const grns = await GoodsReceiptNote.getGoodsReceiptNotes();
        res.status(200).json({ status: 'success', data: grns });
    } catch (error) {
        console.error('Error fetching Goods Receipt Notes:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getGoodsReceiptNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const grn = await GoodsReceiptNote.getGoodsReceiptNoteById(id);
        if (!grn) {
            return res.status(404).json({ status: 'error', message: 'Goods Receipt Note not found' });
        }
        res.status(200).json({ status: 'success', data: grn });
    } catch (error) {
        console.error('Error fetching Goods Receipt Note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateGoodsReceiptNote = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await GoodsReceiptNote.updateGoodsReceiptNote(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Goods Receipt Note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Goods Receipt Note updated successfully' });
    } catch (error) {
        console.error('Error updating Goods Receipt Note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteGoodsReceiptNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await GoodsReceiptNote.deleteGoodsReceiptNote(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Goods Receipt Note not found' });
        }
        res.status(200).json({ status: 'success', message: 'Goods Receipt Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting Goods Receipt Note:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
