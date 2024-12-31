const Supplier = require('../models/supplierModel');
const path = require('path');

// Create Supplier
exports.createSupplier = async (req, res) => {
    try {
        const supplierData = req.body;

        if (req.file) {
            supplierData.image = path.join('/uploads', req.file.filename);
        }

        const result = await Supplier.createSupplier(supplierData);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...supplierData }
        });
    } catch (error) {
        console.error('Error creating supplier:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get All Suppliers
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.getSuppliers();
        res.status(200).json({ status: 'success', data: suppliers });
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get Supplier By ID
exports.getSupplierById = async (req, res) => {
    try {
        const id = req.params.id;
        const supplier = await Supplier.getSupplierById(id);
        if (!supplier) {
            return res.status(404).json({ status: 'error', message: 'Supplier not found' });
        }
        res.status(200).json({ status: 'success', data: supplier });
    } catch (error) {
        console.error('Error fetching supplier:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update Supplier
exports.updateSupplier = async (req, res) => {
    try {
        const id = req.params.id;
        const supplierData = req.body;

        if (req.file) {
            supplierData.image = path.join('/uploads', req.file.filename);
        }

        const result = await Supplier.updateSupplier(id, supplierData);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Supplier not found' });
        }
        res.status(200).json({ status: 'success', message: 'Supplier updated successfully' });
    } catch (error) {
        console.error('Error updating supplier:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete Supplier
exports.deleteSupplier = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Supplier.deleteSupplier(id);  // Assuming deleteUser is a valid method on your User model
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
   
};
