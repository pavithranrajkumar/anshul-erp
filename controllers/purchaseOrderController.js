const PurchaseOrder = require('../models/purchaseOrderModel');

// Create a new purchase order
exports.createPurchaseOrder = async (req, res) => {
    try {
        const data = req.body;
        const result = await PurchaseOrder.createPurchaseOrder(data);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        console.error('Error creating purchase order:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all purchase orders
exports.getAllPurchaseOrders = async (req, res) => {
    try {
        const orders = await PurchaseOrder.getAllPurchaseOrders();
        res.status(200).json({ status: 'success', data: orders });
    } catch (error) {
        console.error('Error fetching purchase orders:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get a purchase order by ID
exports.getPurchaseOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await PurchaseOrder.getPurchaseOrderById(id);
        if (!order) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update a purchase order by ID
exports.updatePurchaseOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await PurchaseOrder.updatePurchaseOrder(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', message: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Delete a purchase order by ID
exports.deletePurchaseOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PurchaseOrder.deletePurchaseOrder(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
