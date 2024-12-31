const express = require('express');
const router = express.Router();
const {
    getAllFranchises,
    getFranchiseById,
    createFranchise,
    updateFranchise,
    deleteFranchise
} = require('../controllers/franchiseController'); // Ensure the path is correct

// Define routes
router.get('/', getAllFranchises); // List all franchises
router.get('/:id', getFranchiseById); // Get a single franchise by ID
router.post('/', createFranchise); // Create a franchise
router.put('/:id', updateFranchise); // Update a franchise
router.delete('/:id', deleteFranchise); // Delete a franchise

module.exports = router;
