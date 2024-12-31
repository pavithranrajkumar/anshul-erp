const express = require('express');
const salesSetupController = require('../controllers/salesSetupController');

const router = express.Router();

router.post('/', salesSetupController.createSalesSetup);
router.get('/', salesSetupController.getSalesSetups);
router.get('/:id', salesSetupController.getSalesSetupById);
router.put('/:id', salesSetupController.updateSalesSetup);
router.delete('/:id', salesSetupController.deleteSalesSetup);

module.exports = router;
