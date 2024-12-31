const express = require('express');
const couponMasterController = require('../controllers/couponMasterController');

const router = express.Router();

router.post('/', couponMasterController.createCoupon);
router.get('/', couponMasterController.getAllCoupons);
router.get('/:id', couponMasterController.getCouponById);
router.put('/:id', couponMasterController.updateCoupon);
router.delete('/:id', couponMasterController.deleteCoupon);

module.exports = router;
