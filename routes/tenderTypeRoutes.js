const express = require('express');
const tenderTypeController = require('../controllers/tenderTypeController');

const router = express.Router();

router.post('/', tenderTypeController.createTenderType);
router.get('/', tenderTypeController.getAllTenderTypes);
router.get('/:id', tenderTypeController.getTenderTypeById);
router.put('/:id', tenderTypeController.updateTenderType);
router.delete('/:id', tenderTypeController.deleteTenderType);

module.exports = router;
