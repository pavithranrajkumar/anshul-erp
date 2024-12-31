const express = require('express');
const router = express.Router();
const purchaseRequisitionController = require('../controllers/purchaseRequisitionController');

// Create a new purchase requisition
router.post('/', purchaseRequisitionController.createPurchaseRequisition);

// Get all purchase requisitions
router.get('/', purchaseRequisitionController.getAllPurchaseRequisitions);

// Get a purchase requisition by ID
router.get('/:id', purchaseRequisitionController.getPurchaseRequisitionById);

// Update a purchase requisition by ID
router.put('/:id', purchaseRequisitionController.updatePurchaseRequisition);

// Delete a purchase requisition by ID
router.delete('/:id', purchaseRequisitionController.deletePurchaseRequisition);

module.exports = router;
