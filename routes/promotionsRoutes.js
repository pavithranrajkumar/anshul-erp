const express = require('express');
const promotionsController = require('../controllers/promotionsController');

const router = express.Router();

router.post('/', promotionsController.createPromotion);
router.get('/', promotionsController.getAllPromotions);
router.get('/:id', promotionsController.getPromotionById);
router.put('/:id', promotionsController.updatePromotion);
router.delete('/:id', promotionsController.deletePromotion);

module.exports = router;
