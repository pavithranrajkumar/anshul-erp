const express = require('express');
const itemWeighmentController = require('../controllers/itemWeighmentController');

const router = express.Router();

router.post('/', itemWeighmentController.createWeighment);
router.get('/', itemWeighmentController.getAllWeighments);
router.get('/:id', itemWeighmentController.getWeighmentById);
router.put('/:id', itemWeighmentController.updateWeighment);
router.delete('/:id', itemWeighmentController.deleteWeighment);

module.exports = router;
