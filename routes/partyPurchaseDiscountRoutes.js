const express = require('express');
const router = express.Router();
const partyPurchaseDiscountController = require('../controllers/partyPurchaseDiscountController');

// Create a new party purchase discount
router.post('/', partyPurchaseDiscountController.createPartyPurchaseDiscount);

// Get all party purchase discounts
router.get('/', partyPurchaseDiscountController.getPartyPurchaseDiscounts);

// Get a party purchase discount by ID
router.get('/:id', partyPurchaseDiscountController.getPartyPurchaseDiscountById);

// Update a party purchase discount by ID
router.put('/:id', partyPurchaseDiscountController.updatePartyPurchaseDiscount);

// Delete a party purchase discount by ID
router.delete('/:id', partyPurchaseDiscountController.deletePartyPurchaseDiscount);

module.exports = router;
