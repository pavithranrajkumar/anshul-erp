const Promotion = require('../models/promotionsModel');

exports.createPromotion = async (req, res) => {
    try {
        const data = req.body;
        const result = await Promotion.createPromotion(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating promotion:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.getAllPromotions();
        res.status(200).json({ status: 'success', data: promotions });
    } catch (error) {
        console.error('Error fetching promotions:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPromotionById = async (req, res) => {
    try {
        const id = req.params.id;
        const promotion = await Promotion.getPromotionById(id);
        if (!promotion) {
            return res.status(404).json({ status: 'error', message: 'Promotion not found' });
        }
        res.status(200).json({ status: 'success', data: promotion });
    } catch (error) {
        console.error('Error fetching promotion:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePromotion = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Promotion.updatePromotion(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Promotion not found' });
        }
        res.status(200).json({ status: 'success', message: 'Promotion updated successfully' });
    } catch (error) {
        console.error('Error updating promotion:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePromotion = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Promotion.deletePromotion(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Promotion not found' });
        }
        res.status(200).json({ status: 'success', message: 'Promotion deleted successfully' });
    } catch (error) {
        console.error('Error deleting promotion:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
