const Counter = require('../models/counterModel');

exports.createCounter = async (req, res) => {
    try {
        const data = req.body;
        const result = await Counter.createCounter(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating counter:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllCounters = async (req, res) => {
    try {
        const counters = await Counter.getAllCounters();
        res.status(200).json({ status: 'success', data: counters });
    } catch (error) {
        console.error('Error fetching counters:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getCounterById = async (req, res) => {
    try {
        const id = req.params.id;
        const counter = await Counter.getCounterById(id);
        if (!counter) {
            return res.status(404).json({ status: 'error', message: 'Counter not found' });
        }
        res.status(200).json({ status: 'success', data: counter });
    } catch (error) {
        console.error('Error fetching counter:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateCounter = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Counter.updateCounter(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Counter not found' });
        }
        res.status(200).json({ status: 'success', message: 'Counter updated successfully' });
    } catch (error) {
        console.error('Error updating counter:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteCounter = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Counter.deleteCounter(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Counter not found' });
        }
        res.status(200).json({ status: 'success', message: 'Counter deleted successfully' });
    } catch (error) {
        console.error('Error deleting counter:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
