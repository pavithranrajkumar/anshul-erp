const PatientMaster = require('../models/patientMasterModel');

exports.createPatient = async (req, res) => {
    try {
        const data = req.body;
        const result = await PatientMaster.createPatient(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating patient:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await PatientMaster.getAllPatients();
        res.status(200).json({ status: 'success', data: patients });
    } catch (error) {
        console.error('Error fetching patients:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const id = req.params.id;
        const patient = await PatientMaster.getPatientById(id);
        if (!patient) {
            return res.status(404).json({ status: 'error', message: 'Patient not found' });
        }
        res.status(200).json({ status: 'success', data: patient });
    } catch (error) {
        console.error('Error fetching patient:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PatientMaster.updatePatient(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Patient not found' });
        }
        res.status(200).json({ status: 'success', message: 'Patient updated successfully' });
    } catch (error) {
        console.error('Error updating patient:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const id = req.params.id; // Extract ID from URL
        const result = await PatientMaster.deletePatient(id); // Call the model's delete method

        if (result.affectedRows === 0) {
            // If no rows were affected, the ID does not exist
            return res.status(404).json({ status: 'error', message: 'Patient not found' });
        }

        res.status(200).json({ status: 'success', message: 'Patient deleted successfully' });
    } catch (error) {
        console.error('Error deleting patient:', error.message);
        res.status(500).json({ status: 'error', message: error.message }); // Internal server error
    }
};
