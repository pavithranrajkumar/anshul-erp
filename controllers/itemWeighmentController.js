const ItemWeighment = require('../models/itemWeighmentModel');

exports.createWeighment = async (req, res) => {
    try {
        const data = req.body;
        const result = await ItemWeighment.createWeighment(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating weighment:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllWeighments = async (req, res) => {
    try {
        const weighments = await ItemWeighment.getAllWeighments();
        res.status(200).json({ status: 'success', data: weighments });
    } catch (error) {
        console.error('Error fetching weighments:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getWeighmentById = async (req, res) => {
    try {
        const id = req.params.id;
        const weighment = await ItemWeighment.getWeighmentById(id);
        if (!weighment) {
            return res.status(404).json({ status: 'error', message: 'Weighment not found' });
        }
        res.status(200).json({ status: 'success', data: weighment });
    } catch (error) {
        console.error('Error fetching weighment:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateWeighment = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await ItemWeighment.updateWeighment(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Weighment not found' });
        }
        res.status(200).json({ status: 'success', message: 'Weighment updated successfully' });
    } catch (error) {
        console.error('Error updating weighment:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteWeighment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ItemWeighment.deleteWeighment(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Weighment not found' });
        }
        res.status(200).json({ status: 'success', message: 'Weighment deleted successfully' });
    } catch (error) {
        console.error('Error deleting weighment:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
