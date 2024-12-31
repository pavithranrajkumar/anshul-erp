const GeneralSetup = require('../models/generalSetupModel');  // Import the GeneralSetup model

// Create a new general setup
exports.createGeneralSetup = async (req, res) => {
    try {
        const data = req.body;
        const result = await GeneralSetup.createGeneralSetup(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating general setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all general setups
exports.getGeneralSetups = async (req, res) => {
    try {
        const setups = await GeneralSetup.getGeneralSetups();
        res.status(200).json({ status: 'success', data: setups });
    } catch (error) {
        console.error('Error fetching general setups:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get general setup by ID
exports.getGeneralSetupById = async (req, res) => {
    try {
        const id = req.params.id;
        const setup = await GeneralSetup.getGeneralSetupById(id);
        if (!setup) {
            return res.status(404).json({ status: 'error', message: 'General setup not found' });
        }
        res.status(200).json({ status: 'success', data: setup });
    } catch (error) {
        console.error('Error fetching general setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update general setup by ID
exports.updateGeneralSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await GeneralSetup.updateGeneralSetup(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'General setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'General setup updated successfully' });
    } catch (error) {
        console.error('Error updating general setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete general setup by ID
exports.deleteGeneralSetup = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await GeneralSetup.deleteGeneralSetup(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'General setup not found' });
        }
        res.status(200).json({ status: 'success', message: 'General setup deleted successfully' });
    } catch (error) {
        console.error('Error deleting general setup:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
 