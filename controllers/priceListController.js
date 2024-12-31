const PriceList = require('../models/priceListModel');

// Create a new price list entry
exports.createPriceList = async (req, res) => {
    try {
        const data = req.body;

        // Validate required fields
        if (!data.description || !data.price_category || !data.effective_from) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }

        const result = await PriceList.createPriceList(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId } });
    } catch (error) {
        console.error('Error creating price list:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all price lists
exports.getPriceLists = async (req, res) => {
    try {
        const priceLists = await PriceList.getPriceLists();
        res.status(200).json({ status: 'success', data: priceLists });
    } catch (error) {
        console.error('Error fetching price lists:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a price list by ID
exports.getPriceListById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const priceList = await PriceList.getPriceListById(id);

        if (!priceList) {
            return res.status(404).json({ status: 'error', message: 'Price list not found' });
        }

        res.status(200).json({ status: 'success', data: priceList });
    } catch (error) {
        console.error('Error fetching price list:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a price list by ID
exports.updatePriceList = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const result = await PriceList.updatePriceList(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Price list not found' });
        }

        res.status(200).json({ status: 'success', message: 'Price list updated successfully' });
    } catch (error) {
        console.error('Error updating price list:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a price list by ID
exports.deletePriceList = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const result = await PriceList.deletePriceList(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Price list not found' });
        }

        res.status(200).json({ status: 'success', message: 'Price list deleted successfully' });
    } catch (error) {
        console.error('Error deleting price list:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
