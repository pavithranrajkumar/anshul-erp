const CompanySetup = require('../models/companySetupModel');

// Create a new company setup
exports.createCompany = async (req, res) => {
    try {
        const data = req.body;
        const result = await CompanySetup.createCompany(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() }
        });
    } catch (error) {
        console.error('Error creating company setup:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Fetch all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await CompanySetup.getAllCompanies();
        res.status(200).json({ status: 'success', data: companies });
    } catch (error) {
        console.error('Error fetching companies:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Fetch a company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const id = req.params.id;
        const company = await CompanySetup.getCompanyById(id);
        if (!company) {
            return res.status(404).json({ status: 'error', message: 'Company not found' });
        }
        res.status(200).json({ status: 'success', data: company });
    } catch (error) {
        console.error('Error fetching company:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a company setup
exports.updateCompany = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await CompanySetup.updateCompany(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Company not found' });
        }
        res.status(200).json({ status: 'success', message: 'Company updated successfully' });
    } catch (error) {
        console.error('Error updating company:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a company setup
exports.deleteCompany = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CompanySetup.deleteCompany(id);  // Assuming deleteUser is a valid method on your User model
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
