const LoyaltyCard = require('../models/loyaltyCardModel');

exports.createLoyaltyCard = async (req, res) => {
    try {
        const data = req.body;
        const result = await LoyaltyCard.createLoyaltyCard(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating loyalty card:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllLoyaltyCards = async (req, res) => {
    try {
        const loyaltyCards = await LoyaltyCard.getAllLoyaltyCards();
        res.status(200).json({ status: 'success', data: loyaltyCards });
    } catch (error) {
        console.error('Error fetching loyalty cards:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getLoyaltyCardById = async (req, res) => {
    try {
        const id = req.params.id;
        const loyaltyCard = await LoyaltyCard.getLoyaltyCardById(id);
        if (!loyaltyCard) {
            return res.status(404).json({ status: 'error', message: 'Loyalty card not found' });
        }
        res.status(200).json({ status: 'success', data: loyaltyCard });
    } catch (error) {
        console.error('Error fetching loyalty card:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateLoyaltyCard = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await LoyaltyCard.updateLoyaltyCard(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Loyalty card not found' });
        }
        res.status(200).json({ status: 'success', message: 'Loyalty card updated successfully' });
    } catch (error) {
        console.error('Error updating loyalty card:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteLoyaltyCard = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await LoyaltyCard.deleteLoyaltyCard(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Loyalty card not found' });
        }
        res.status(200).json({ status: 'success', message: 'Loyalty card deleted successfully' });
    } catch (error) {
        console.error('Error deleting loyalty card:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
