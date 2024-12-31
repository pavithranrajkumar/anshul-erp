const BrandPartyPurchaseDiscount = require('../models/brandPartyPurchaseDiscountModel');

// Create a new brand party purchase discount entry
exports.createBrandPartyPurchaseDiscount = async (req, res) => {
    try {
        const data = req.body;
        const result = await BrandPartyPurchaseDiscount.createBrandPartyPurchaseDiscount(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating brand party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all brand party purchase discounts
exports.getBrandPartyPurchaseDiscounts = async (req, res) => {
    try {
        const discounts = await BrandPartyPurchaseDiscount.getBrandPartyPurchaseDiscounts();
        res.status(200).json({ status: 'success', data: discounts });
    } catch (error) {
        console.error('Error fetching brand party purchase discounts:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get brand party purchase discount by ID
exports.getBrandPartyPurchaseDiscountById = async (req, res) => {
    try {
        const id = req.params.id;
        const discount = await BrandPartyPurchaseDiscount.getBrandPartyPurchaseDiscountById(id);
        if (!discount) {
            return res.status(404).json({ status: 'error', message: 'Discount not found' });
        }
        res.status(200).json({ status: 'success', data: discount });
    } catch (error) {
        console.error('Error fetching brand party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update brand party purchase discount by ID
exports.updateBrandPartyPurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await BrandPartyPurchaseDiscount.updateBrandPartyPurchaseDiscount(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Discount not found' });
        }
        res.status(200).json({ status: 'success', message: 'Discount updated successfully' });
    } catch (error) {
        console.error('Error updating brand party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete brand party purchase discount by ID
exports.deleteBrandPartyPurchaseDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BrandPartyPurchaseDiscount.deleteBrandPartyPurchaseDiscount(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Discount not found' });
        }
        res.status(200).json({ status: 'success', message: 'Discount deleted successfully' });
    } catch (error) {
        console.error('Error deleting brand party purchase discount:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
