const express = require('express');
const companySetupController = require('../controllers/companySetupController');

const router = express.Router();

router.post('/', companySetupController.createCompany);
router.get('/', companySetupController.getAllCompanies);
router.get('/:id', companySetupController.getCompanyById);
router.put('/:id', companySetupController.updateCompany);
router.delete('/:id', companySetupController.deleteCompany);

module.exports = router;
