const express = require('express');
const router = express.Router();
const purchaseOrderController = require('../controllers/purchaseOrderController');

// Create a new purchase order
router.post('/', purchaseOrderController.createPurchaseOrder);

// Get all purchase orders
router.get('/', purchaseOrderController.getAllPurchaseOrders);

// Get a purchase order by ID
router.get('/:id', purchaseOrderController.getPurchaseOrderById);

// Update a purchase order by ID
router.put('/:id', purchaseOrderController.updatePurchaseOrder);

// Delete a purchase order by ID
router.delete('/:id', purchaseOrderController.deletePurchaseOrder);

module.exports = router;
