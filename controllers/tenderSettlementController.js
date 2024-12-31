const TenderSettlement = require('../models/tenderSettlementModel');

exports.createSettlement = async (req, res) => {
    try {
        const data = req.body;
        const result = await TenderSettlement.createSettlement(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data },
        });
    } catch (error) {
        console.error('Error creating settlement:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllSettlements = async (req, res) => {
    try {
        const settlements = await TenderSettlement.getAllSettlements();
        res.status(200).json({ status: 'success', data: settlements });
    } catch (error) {
        console.error('Error fetching settlements:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getSettlementById = async (req, res) => {
    try {
        const id = req.params.id;
        const settlement = await TenderSettlement.getSettlementById(id);
        if (!settlement) {
            return res.status(404).json({ status: 'error', message: 'Settlement not found' });
        }
        res.status(200).json({ status: 'success', data: settlement });
    } catch (error) {
        console.error('Error fetching settlement:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateSettlement = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await TenderSettlement.updateSettlement(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Settlement not found' });
        }
        res.status(200).json({ status: 'success', message: 'Settlement updated successfully' });
    } catch (error) {
        console.error('Error updating settlement:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteSettlement = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TenderSettlement.deleteSettlement(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Settlement not found' });
        }
        res.status(200).json({ status: 'success', message: 'Settlement deleted successfully' });
    } catch (error) {
        console.error('Error deleting settlement:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
