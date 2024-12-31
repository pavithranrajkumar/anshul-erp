const express = require('express');
const posAlterationDeliveryController = require('../controllers/posAlterationDeliveryController');

const router = express.Router();

// Create alteration delivery
router.post('/', posAlterationDeliveryController.createAlterationDelivery);

// Get all alteration deliveries
router.get('/', posAlterationDeliveryController.getAllAlterationDeliveries);

// Get alteration delivery by ID
router.get('/:id', posAlterationDeliveryController.getAlterationDeliveryById);

// Update alteration delivery by ID
router.put('/:id', posAlterationDeliveryController.updateAlterationDelivery);

// Delete alteration delivery by ID
router.delete('/:id', posAlterationDeliveryController.deleteAlterationDelivery);

module.exports = router;
