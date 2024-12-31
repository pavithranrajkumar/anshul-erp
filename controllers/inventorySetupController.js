const InventorySetup = require('../models/inventorySetupModel');

// Create a new inventory setup
exports.createInventorySetup = async (req, res) => {
    try {
        const data = req.body;
        const result = await InventorySetup.createInventorySetup(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data } });
    } catch (error) {
        console.error('Error creating inventory setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all inventory setups
exports.getInventorySetups = async (req, res) => {
    try {
        const setups = await InventorySetup.getInventorySetups();
        res.status(200).json({ status: 'success', data: setups });
    } catch (error) {
        console.error('Error fetching inventory setups:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get inventory setup by ID
exports.getInventorySetupById = async (req, res) => {
    try {
        const id = req.params.id;
        const setup = await InventorySetup.getInventorySetupById(id);
        if (!setup) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', data: setup });
    } catch (error) {
        console.error('Error fetching inventory setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update inventory setup
exports.updateInventorySetup = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await InventorySetup.updateInventorySetup(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'Setup updated successfully' });
    } catch (error) {
        console.error('Error updating inventory setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete inventory setup
exports.deleteInventorySetup = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await InventorySetup.deleteInventorySetup(id);  // Assuming deleteUser is a valid method on your User model
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
