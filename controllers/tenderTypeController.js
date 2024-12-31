const TenderType = require('../models/tenderTypeModel');

exports.createTenderType = async (req, res) => {
    try {
        const data = req.body;
        const result = await TenderType.createTenderType(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating tender type:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllTenderTypes = async (req, res) => {
    try {
        const tenderTypes = await TenderType.getAllTenderTypes();
        res.status(200).json({ status: 'success', data: tenderTypes });
    } catch (error) {
        console.error('Error fetching tender types:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getTenderTypeById = async (req, res) => {
    try {
        const id = req.params.id;
        const tenderType = await TenderType.getTenderTypeById(id);
        if (!tenderType) {
            return res.status(404).json({ status: 'error', message: 'Tender Type not found' });
        }
        res.status(200).json({ status: 'success', data: tenderType });
    } catch (error) {
        console.error('Error fetching tender type:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateTenderType = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await TenderType.updateTenderType(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tender Type not found' });
        }
        res.status(200).json({ status: 'success', message: 'Tender Type updated successfully' });
    } catch (error) {
        console.error('Error updating tender type:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteTenderType = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TenderType.deleteTenderType(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tender Type not found' });
        }
        res.status(200).json({ status: 'success', message: 'Tender Type deleted successfully' });
    } catch (error) {
        console.error('Error deleting tender type:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
