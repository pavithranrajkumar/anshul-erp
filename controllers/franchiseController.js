const Franchise = require('../models/Franchise'); // Ensure the path is correct

exports.getAllFranchises = async (req, res) => {
    try {
        const franchises = await Franchise.findAll();
        res.status(200).json(franchises);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch franchises' });
    }
};

exports.getFranchiseById = async (req, res) => {
    const { id } = req.params;
    try {
        const franchise = await Franchise.findById(id);
        if (!franchise) {
            return res.status(404).json({ message: 'Franchise not found' });
        }
        res.status(200).json(franchise);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch franchise' });
    }
};

exports.createFranchise = async (req, res) => {
    const { name, email, password, location, city } = req.body;
    try {
        const newFranchise = await Franchise.create({ name, email, password, location, city });
        res.status(201).json(newFranchise);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create franchise' });
    }
};

exports.updateFranchise = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, location, city } = req.body;
    try {
        const updatedFranchise = await Franchise.update(id, { name, email, password, location, city });
        res.status(200).json(updatedFranchise);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update franchise' });
    }
};

exports.deleteFranchise = async (req, res) => {
    const { id } = req.params;
    try {
        await Franchise.delete(id);
        res.status(200).json({ message: 'Franchise deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete franchise' });
    }
};
