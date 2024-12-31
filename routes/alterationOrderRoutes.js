const express = require('express');
const alterationOrderController = require('../controllers/alterationOrderController');

const router = express.Router();

router.post('/', alterationOrderController.createOrder);
router.get('/', alterationOrderController.getAllOrders);
router.get('/:id', alterationOrderController.getOrderById);
router.put('/:id', alterationOrderController.updateOrder);
router.delete('/:id', alterationOrderController.deleteOrder);

module.exports = router;
