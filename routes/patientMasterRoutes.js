const express = require('express');
const patientMasterController = require('../controllers/patientMasterController');

const router = express.Router();

router.post('/', patientMasterController.createPatient);
router.get('/', patientMasterController.getAllPatients);
router.get('/:id', patientMasterController.getPatientById);
router.put('/:id', patientMasterController.updatePatient);
router.delete('/:id', patientMasterController.deletePatient);

module.exports = router;
