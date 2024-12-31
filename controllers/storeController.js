const Store = require('../models/storeModel');

// Create a new store
exports.createStore = async (req, res) => {
    try {
        const data = req.body;
        const result = await Store.createStore(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data, password: undefined } });
    } catch (error) {
        console.error('Error creating store:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all stores
exports.getStores = async (req, res) => {
    try {
        const stores = await Store.getStores();
        res.status(200).json({ status: 'success', data: stores });
    } catch (error) {
        console.error('Error fetching stores:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get store by ID
exports.getStoreById = async (req, res) => {
    try {
        const id = req.params.id;
        const store = await Store.getStoreById(id);
        if (!store) {
            return res.status(404).json({ status: 'error', message: 'Store not found' });
        }
        res.status(200).json({ status: 'success', data: store });
    } catch (error) {
        console.error('Error fetching store:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update store
exports.updateStore = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Store.updateStore(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Store not found' });
        }
        res.status(200).json({ status: 'success', message: 'Store updated successfully' });
    } catch (error) {
        console.error('Error updating store:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete store
exports.deleteStore = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Store.deleteStore(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Store not found' });
        }
        res.status(200).json({ status: 'success', message: 'Store deleted successfully' });
    } catch (error) {
        console.error('Error deleting store:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
