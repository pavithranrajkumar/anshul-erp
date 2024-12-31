const SalesSetup = require('../models/salesSetupModel');

// Create a new sales setup
exports.createSalesSetup = async (req, res) => {
    try {
        const data = req.body;
        const result = await SalesSetup.createSalesSetup(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data } });
    } catch (error) {
        console.error('Error creating sales setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all sales setups
exports.getSalesSetups = async (req, res) => {
    try {
        const setups = await SalesSetup.getSalesSetups();
        res.status(200).json({ status: 'success', data: setups });
    } catch (error) {
        console.error('Error fetching sales setups:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get sales setup by ID
exports.getSalesSetupById = async (req, res) => {
    try {
        const id = req.params.id;
        const setup = await SalesSetup.getSalesSetupById(id);
        if (!setup) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', data: setup });
    } catch (error) {
        console.error('Error fetching sales setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update sales setup
exports.updateSalesSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await SalesSetup.updateSalesSetup(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'Setup updated successfully' });
    } catch (error) {
        console.error('Error updating sales setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
// delete
exports.deleteSalesSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await SalesSetup.deleteSalesSetup(id);  // Assuming deleteUser is a valid method on your User model

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }

        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
