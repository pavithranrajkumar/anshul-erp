const express = require('express');
const counterController = require('../controllers/counterController');

const router = express.Router();

router.post('/', counterController.createCounter);
router.get('/', counterController.getAllCounters);
router.get('/:id', counterController.getCounterById);
router.put('/:id', counterController.updateCounter);
router.delete('/:id', counterController.deleteCounter);

module.exports = router;
