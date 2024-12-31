const DayStartClose = require('../models/dayStartCloseModel');

exports.createEntry = async (req, res) => {
    try {
        const data = req.body;
        const result = await DayStartClose.createEntry(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating day start/close entry:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllEntries = async (req, res) => {
    try {
        const entries = await DayStartClose.getAllEntries();
        res.status(200).json({ status: 'success', data: entries });
    } catch (error) {
        console.error('Error fetching day start/close entries:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getEntryById = async (req, res) => {
    try {
        const id = req.params.id;
        const entry = await DayStartClose.getEntryById(id);
        if (!entry) {
            return res.status(404).json({ status: 'error', message: 'Entry not found' });
        }
        res.status(200).json({ status: 'success', data: entry });
    } catch (error) {
        console.error('Error fetching day start/close entry:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await DayStartClose.updateEntry(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Entry not found' });
        }
        res.status(200).json({ status: 'success', message: 'Entry updated successfully' });
    } catch (error) {
        console.error('Error updating day start/close entry:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await DayStartClose.deleteEntry(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Entry not found' });
        }
        res.status(200).json({ status: 'success', message: 'Entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting day start/close entry:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
