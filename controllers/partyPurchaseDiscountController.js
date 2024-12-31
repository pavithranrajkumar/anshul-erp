const PartyPurchaseDiscount = require('../models/partyPurchaseDiscountModel');

// Create a new party purchase discount entry
exports.createPartyPurchaseDiscount = async (req, res) => {
    try {
        const data = req.body;

        // Validate required fields
        if (!data.description || !data.date || !data.party_code || !data.party_name) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }

        const result = await PartyPurchaseDiscount.createPartyPurchaseDiscount(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId } });
    } catch (error) {
        console.error('Error creating party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all party purchase discounts
exports.getPartyPurchaseDiscounts = async (req, res) => {
    try {
        const discounts = await PartyPurchaseDiscount.getPartyPurchaseDiscounts();
        res.status(200).json({ status: 'success', data: discounts });
    } catch (error) {
        console.error('Error fetching party purchase discounts:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a party purchase discount by ID
exports.getPartyPurchaseDiscountById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const discount = await PartyPurchaseDiscount.getPartyPurchaseDiscountById(id);

        if (!discount) {
            return res.status(404).json({ status: 'error', message: 'Party purchase discount not found' });
        }

        res.status(200).json({ status: 'success', data: discount });
    } catch (error) {
        console.error('Error fetching party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a party purchase discount by ID
exports.updatePartyPurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const result = await PartyPurchaseDiscount.updatePartyPurchaseDiscount(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Party purchase discount not found' });
        }

        res.status(200).json({ status: 'success', message: 'Party purchase discount updated successfully' });
    } catch (error) {
        console.error('Error updating party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a party purchase discount by ID
exports.deletePartyPurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ status: 'error', message: 'ID parameter is required' });
        }

        const result = await PartyPurchaseDiscount.deletePartyPurchaseDiscount(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Party purchase discount not found' });
        }

        res.status(200).json({ status: 'success', message: 'Party purchase discount deleted successfully' });
    } catch (error) {
        console.error('Error deleting party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
