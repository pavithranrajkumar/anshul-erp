const FinanceSetup = require('../models/financeSetupModel');

// Create a new finance setup
exports.createFinanceSetup = async (req, res) => {
    try {
        const data = req.body;
        const result = await FinanceSetup.createFinanceSetup(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data } });
    } catch (error) {
        console.error('Error creating finance setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all finance setups
exports.getFinanceSetups = async (req, res) => {
    try {
        const setups = await FinanceSetup.getFinanceSetups();
        res.status(200).json({ status: 'success', data: setups });
    } catch (error) {
        console.error('Error fetching finance setups:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get finance setup by ID
exports.getFinanceSetupById = async (req, res) => {
    try {
        const id = req.params.id;
        const setup = await FinanceSetup.getFinanceSetupById(id);
        if (!setup) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', data: setup });
    } catch (error) {
        console.error('Error fetching finance setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update finance setup
exports.updateFinanceSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await FinanceSetup.updateFinanceSetup(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'Setup updated successfully' });
    } catch (error) {
        console.error('Error updating finance setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete finance setup
exports.deleteFinanceSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await FinanceSetup.deleteFinanceSetup(id);  // Assuming deleteUser is a valid method on your User model
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
