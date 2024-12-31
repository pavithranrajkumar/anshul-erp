const express = require('express');
const processPosOrdersController = require('../controllers/processPosOrdersController');

const router = express.Router();

router.post('/', processPosOrdersController.createOrder);
router.get('/', processPosOrdersController.getAllOrders);
router.get('/:id', processPosOrdersController.getOrderById);
router.put('/:id', processPosOrdersController.updateOrder);
router.delete('/:id', processPosOrdersController.deleteOrder);

module.exports = router;
