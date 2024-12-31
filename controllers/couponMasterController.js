const CouponMaster = require('../models/couponMasterModel');

exports.createCoupon = async (req, res) => {
    try {
        const data = req.body;
        const result = await CouponMaster.createCoupon(data);
        res.status(201).json({
            status: 'success',
            data: { id: result.insertId, ...data, createdAt: new Date().toISOString() },
        });
    } catch (error) {
        console.error('Error creating coupon:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getAllCoupons = async (req, res) => {
    try {
        const coupons = await CouponMaster.getAllCoupons();
        res.status(200).json({ status: 'success', data: coupons });
    } catch (error) {
        console.error('Error fetching coupons:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getCouponById = async (req, res) => {
    try {
        const id = req.params.id;
        const coupon = await CouponMaster.getCouponById(id);
        if (!coupon) {
            return res.status(404).json({ status: 'error', message: 'Coupon not found' });
        }
        res.status(200).json({ status: 'success', data: coupon });
    } catch (error) {
        console.error('Error fetching coupon:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.updateCoupon = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await CouponMaster.updateCoupon(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Coupon not found' });
        }
        res.status(200).json({ status: 'success', message: 'Coupon updated successfully' });
    } catch (error) {
        console.error('Error updating coupon:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.deleteCoupon = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CouponMaster.deleteCoupon(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Coupon not found' });
        }
        res.status(200).json({ status: 'success', message: 'Coupon deleted successfully' });
    } catch (error) {
        console.error('Error deleting coupon:', error.message);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
