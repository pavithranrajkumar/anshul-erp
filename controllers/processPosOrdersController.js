const ProcessPosOrders = require('../models/processPosOrdersModel');

exports.createOrder = async (req, res) => {
    try {
        const data = req.body;
        const result = await ProcessPosOrders.createOrder(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await ProcessPosOrders.getAllOrders();
        res.status(200).json({ status: 'success', data: orders });
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await ProcessPosOrders.getOrderById(id);
        if (!order) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        console.error('Error fetching order:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await ProcessPosOrders.updateOrder(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', message: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ProcessPosOrders.deleteOrder(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Order not found' });
        }
        res.status(200).json({ status: 'success', message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
