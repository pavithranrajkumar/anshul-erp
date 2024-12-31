const PurchaseSetup = require('../models/purchaseSetupModel');

// Create a new purchase setup
exports.createPurchaseSetup = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseSetup.createPurchaseSetup(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data } });
    } catch (error) {
        console.error('Error creating purchase setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all purchase setups
exports.getPurchaseSetups = async (req, res) => {
    try {
        const setups = await PurchaseSetup.getPurchaseSetups();
        res.status(200).json({ status: 'success', data: setups });
    } catch (error) {
        console.error('Error fetching purchase setups:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get purchase setup by ID
exports.getPurchaseSetupById = async (req, res) => {
    try {
        const id = req.params.id;
        const setup = await PurchaseSetup.getPurchaseSetupById(id);
        if (!setup) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', data: setup });
    } catch (error) {
        console.error('Error fetching purchase setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update purchase setup
exports.updatePurchaseSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseSetup.updatePurchaseSetup(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'Setup updated successfully' });
    } catch (error) {
        console.error('Error updating purchase setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete purchase setup
exports.deletePurchaseSetup = async (req, res) => {
    try {
    const id = req.params.id;
    const result = await PurchaseSetup.deletePurchaseSetup(id);  // Assuming deleteUser is a valid method on your User model

    if (result.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', message: 'User deleted successfully' });
} catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ status: 'error', message: error.message });
}
};
