const express = require('express');
const router = express.Router();
const brandPartyPurchaseDiscountController = require('../controllers/brandPartyPurchaseDiscountController');

// Create a new brand party purchase discount
router.post('/', brandPartyPurchaseDiscountController.createBrandPartyPurchaseDiscount);

// Get all brand party purchase discounts
router.get('/', brandPartyPurchaseDiscountController.getBrandPartyPurchaseDiscounts);

// Get brand party purchase discount by ID
router.get('/:id', brandPartyPurchaseDiscountController.getBrandPartyPurchaseDiscountById);

// Update brand party purchase discount by ID
router.put('/:id', brandPartyPurchaseDiscountController.updateBrandPartyPurchaseDiscount);

// Delete brand party purchase discount by ID
router.delete('/:id', brandPartyPurchaseDiscountController.deleteBrandPartyPurchaseDiscount);

module.exports = router;
