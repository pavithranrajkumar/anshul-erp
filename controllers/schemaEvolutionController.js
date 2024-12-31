const SchemaEvolution = require('../models/schemaEvolutionModel');

// Create a new schema evolution entry
exports.createSchemaEvolution = async (req, res) => {
    try {
        const data = req.body;
        const result = await SchemaEvolution.createSchemaEvolution(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating schema evolution:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all schema evolution entries
exports.getAllSchemaEvolutions = async (req, res) => {
    try {
        const evolutions = await SchemaEvolution.getAllSchemaEvolutions();
        res.status(200).json({ status: 'success', data: evolutions });
    } catch (error) {
        console.error('Error fetching schema evolutions:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a schema evolution entry by ID
exports.getSchemaEvolutionById = async (req, res) => {
    try {
        const id = req.params.id;
        const evolution = await SchemaEvolution.getSchemaEvolutionById(id);
        if (!evolution) {
            return res.status(404).json({ status: 'error', message: 'Schema evolution not found' });
        }
        res.status(200).json({ status: 'success', data: evolution });
    } catch (error) {
        console.error('Error fetching schema evolution:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a schema evolution entry by ID
exports.updateSchemaEvolution = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await SchemaEvolution.updateSchemaEvolution(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Schema evolution not found' });
        }
        res.status(200).json({ status: 'success', message: 'Schema evolution updated successfully' });
    } catch (error) {
        console.error('Error updating schema evolution:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a schema evolution entry by ID
exports.deleteSchemaEvolution = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await SchemaEvolution.deleteSchemaEvolution(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Schema evolution not found' });
        }
        res.status(200).json({ status: 'success', message: 'Schema evolution deleted successfully' });
    } catch (error) {
        console.error('Error deleting schema evolution:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
