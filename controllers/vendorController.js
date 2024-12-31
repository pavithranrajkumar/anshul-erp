const Vendor = require('../models/vendorModel'); // Import the Vendor model

// Create a new vendor
exports.createVendor = async (req, res) => {
    try {
        const data = req.body;
        if (req.file) {
            data.attachment = req.file.path.replace(/\\/g, '/'); // Store file path and handle Windows paths
        }
        const result = await Vendor.createVendor(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating vendor:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all vendors
exports.getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.getVendors();
        res.status(200).json({ status: 'success', data: vendors });
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get vendor by ID
exports.getVendorById = async (req, res) => {
    try {
        const id = req.params.id;
        const vendor = await Vendor.getVendorById(id);
        if (!vendor) {
            return res.status(404).json({ status: 'error', message: 'Vendor not found' });
        }
        res.status(200).json({ status: 'success', data: vendor });
    } catch (error) {
        console.error('Error fetching vendor:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update vendor by ID
exports.updateVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        if (req.file) {
            data.attachment = req.file.path.replace(/\\/g, '/'); // Store file path and handle Windows paths
        }
        const result = await Vendor.updateVendor(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Vendor not found' });
        }
        res.status(200).json({ status: 'success', message: 'Vendor updated successfully' });
    } catch (error) {
        console.error('Error updating vendor:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete vendor by ID
exports.deleteVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Vendor.deleteVendor(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Vendor not found' });
        }
        res.status(200).json({ status: 'success', message: 'Vendor deleted successfully' });
    } catch (error) {
        console.error('Error deleting vendor:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
