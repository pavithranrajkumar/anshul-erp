const express = require('express');
const inventorySetupController = require('../controllers/inventorySetupController');

const router = express.Router();

router.post('/', inventorySetupController.createInventorySetup);
router.get('/', inventorySetupController.getInventorySetups);
router.get('/:id', inventorySetupController.getInventorySetupById);
router.put('/:id', inventorySetupController.updateInventorySetup);
router.delete('/:id', inventorySetupController.deleteInventorySetup);

module.exports = router;
