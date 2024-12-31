const express = require('express');
const controller = require('../controllers/schemaEvolutionController');

const router = express.Router();

// Define all routes for the schema evolution module
router.post('/', controller.createSchemaEvolution);
router.get('/', controller.getAllSchemaEvolutions);
router.get('/:id', controller.getSchemaEvolutionById);
router.put('/:id', controller.updateSchemaEvolution);
router.delete('/:id', controller.deleteSchemaEvolution);

module.exports = router;
