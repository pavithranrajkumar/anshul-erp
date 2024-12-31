const express = require('express');
const financeSetupController = require('../controllers/financeSetupController');

const router = express.Router();

router.post('/', financeSetupController.createFinanceSetup);
router.get('/', financeSetupController.getFinanceSetups);
router.get('/:id', financeSetupController.getFinanceSetupById);
router.put('/:id', financeSetupController.updateFinanceSetup);
router.delete('/:id', financeSetupController.deleteFinanceSetup);

module.exports = router;
