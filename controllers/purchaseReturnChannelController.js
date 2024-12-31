const PurchaseReturnChannel = require('../models/purchaseReturnChannelModel');

exports.createPurchaseReturnChannel = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseReturnChannel.createPurchaseReturnChannel(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase return channel:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllPurchaseReturnChannels = async (req, res) => {
    try {
        const channels = await PurchaseReturnChannel.getAllPurchaseReturnChannels();
        res.status(200).json({ status: 'success', data: channels });
    } catch (error) {
        console.error('Error fetching purchase return channels:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getPurchaseReturnChannelById = async (req, res) => {
    try {
        const id = req.params.id;
        const channel = await PurchaseReturnChannel.getPurchaseReturnChannelById(id);
        if (!channel) {
            return res.status(404).json({ status: 'error', message: 'Purchase return channel not found' });
        }
        res.status(200).json({ status: 'success', data: channel });
    } catch (error) {
        console.error('Error fetching purchase return channel:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updatePurchaseReturnChannel = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseReturnChannel.updatePurchaseReturnChannel(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase return channel not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase return channel updated successfully' });
    } catch (error) {
        console.error('Error updating purchase return channel:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deletePurchaseReturnChannel = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseReturnChannel.deletePurchaseReturnChannel(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Purchase return channel not found' });
        }
        res.status(200).json({ status: 'success', message: 'Purchase return channel deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase return channel:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
