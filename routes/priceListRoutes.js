const express = require('express');
const priceListController = require('../controllers/priceListController');

const router = express.Router();

// Create a new price list
router.post('/', priceListController.createPriceList);

// Get all price lists
router.get('/', priceListController.getPriceLists);

// Get a price list by ID
router.get('/:id', priceListController.getPriceListById);

// Update a price list by ID
router.put('/:id', priceListController.updatePriceList);

// Delete a price list by ID
router.delete('/:id', priceListController.deletePriceList);

module.exports = router;
