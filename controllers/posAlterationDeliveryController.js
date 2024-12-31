const POSAlterationDelivery = require('../models/posAlterationDeliveryModel');

// Create a new alteration delivery
exports.createAlterationDelivery = async (req, res) => {
    try {
        const data = req.body;
        const result = await POSAlterationDelivery.createAlterationDelivery(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating alteration delivery:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all alteration deliveries
exports.getAllAlterationDeliveries = async (req, res) => {
    try {
        const deliveries = await POSAlterationDelivery.getAllAlterationDeliveries();
        res.status(200).json({ status: 'success', data: deliveries });
    } catch (error) {
        console.error('Error fetching alteration deliveries:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a single alteration delivery by ID
exports.getAlterationDeliveryById = async (req, res) => {
    try {
        const id = req.params.id;
        const delivery = await POSAlterationDelivery.getAlterationDeliveryById(id);
        if (!delivery) {
            return res.status(404).json({ status: 'error', message: 'Alteration delivery not found' });
        }
        res.status(200).json({ status: 'success', data: delivery });
    } catch (error) {
        console.error('Error fetching alteration delivery:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update alteration delivery by ID
exports.updateAlterationDelivery = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await POSAlterationDelivery.updateAlterationDelivery(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Alteration delivery not found' });
        }
        res.status(200).json({ status: 'success', message: 'Alteration delivery updated successfully' });
    } catch (error) {
        console.error('Error updating alteration delivery:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete alteration delivery by ID
exports.deleteAlterationDelivery = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await POSAlterationDelivery.deleteAlterationDelivery(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Alteration delivery not found' });
        }
        res.status(200).json({ status: 'success', message: 'Alteration delivery deleted successfully' });
    } catch (error) {
        console.error('Error deleting alteration delivery:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
