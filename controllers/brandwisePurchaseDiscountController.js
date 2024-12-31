const BrandwisePurchaseDiscount = require('../models/brandwisePurchaseDiscountModel');

// Create a new brandwise purchase discount
exports.createBrandwisePurchaseDiscount = async (req, res) => {
    try {
        const data = req.body;
        const result = await BrandwisePurchaseDiscount.createBrandwisePurchaseDiscount(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating brandwise purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all brandwise purchase discounts
exports.getBrandwisePurchaseDiscounts = async (req, res) => {
    try {
        const discounts = await BrandwisePurchaseDiscount.getBrandwisePurchaseDiscounts();
        res.status(200).json({ status: 'success', data: discounts });
    } catch (error) {
        console.error('Error fetching brandwise purchase discounts:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a brandwise purchase discount by ID
exports.getBrandwisePurchaseDiscountById = async (req, res) => {
    try {
        const id = req.params.id;
        const discount = await BrandwisePurchaseDiscount.getBrandwisePurchaseDiscountById(id);
        if (!discount) {
            return res.status(404).json({ status: 'error', message: 'Brandwise purchase discount not found' });
        }
        res.status(200).json({ status: 'success', data: discount });
    } catch (error) {
        console.error('Error fetching brandwise purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a brandwise purchase discount by ID
exports.updateBrandwisePurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await BrandwisePurchaseDiscount.updateBrandwisePurchaseDiscount(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Brandwise purchase discount not found' });
        }
        res.status(200).json({ status: 'success', message: 'Brandwise purchase discount updated successfully' });
    } catch (error) {
        console.error('Error updating brandwise purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a brandwise purchase discount by ID
exports.deleteBrandwisePurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BrandwisePurchaseDiscount.deleteBrandwisePurchaseDiscount(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Brandwise purchase discount not found' });
        }
        res.status(200).json({ status: 'success', message: 'Brandwise purchase discount deleted successfully' });
    } catch (error) {
        console.error('Error deleting brandwise purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
