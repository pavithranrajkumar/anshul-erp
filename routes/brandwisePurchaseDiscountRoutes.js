const express = require('express');
const router = express.Router();
const brandwisePurchaseDiscountController = require('../controllers/brandwisePurchaseDiscountController');

// Create a new brandwise purchase discount
router.post('/', brandwisePurchaseDiscountController.createBrandwisePurchaseDiscount);

// Get all brandwise purchase discounts
router.get('/', brandwisePurchaseDiscountController.getBrandwisePurchaseDiscounts);

// Get a brandwise purchase discount by ID
router.get('/:id', brandwisePurchaseDiscountController.getBrandwisePurchaseDiscountById);

// Update a brandwise purchase discount by ID
router.put('/:id', brandwisePurchaseDiscountController.updateBrandwisePurchaseDiscount);

// Delete a brandwise purchase discount by ID
router.delete('/:id', brandwisePurchaseDiscountController.deleteBrandwisePurchaseDiscount);

module.exports = router;
