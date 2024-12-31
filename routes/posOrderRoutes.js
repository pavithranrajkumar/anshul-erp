const express = require('express');
const posOrderController = require('../controllers/posOrderController');

const router = express.Router();

router.post('/', posOrderController.createOrder);
router.get('/', posOrderController.getAllOrders);
router.get('/:id', posOrderController.getOrderById);
router.put('/:id', posOrderController.updateOrder);
router.delete('/:id', posOrderController.deleteOrder);

module.exports = router;
