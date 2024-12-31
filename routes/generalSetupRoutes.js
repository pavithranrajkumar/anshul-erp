const express = require('express');
const generalSetupController = require('../controllers/generalSetupController');  // Import the controller

const router = express.Router();

// Route to create a new general setup
router.post('/', generalSetupController.createGeneralSetup);

// Route to get all general setups
router.get('/', generalSetupController.getGeneralSetups);

// Route to get a specific general setup by ID
router.get('/:id', generalSetupController.getGeneralSetupById);

// Route to update a specific general setup by ID
router.put('/:id', generalSetupController.updateGeneralSetup);

// Route to delete a specific general setup by ID
router.delete('/:id', generalSetupController.deleteGeneralSetup);

module.exports = router;
