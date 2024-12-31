const express = require('express');
const loyaltyCardController = require('../controllers/loyaltyCardController');

const router = express.Router();

router.post('/', loyaltyCardController.createLoyaltyCard);
router.get('/', loyaltyCardController.getAllLoyaltyCards);
router.get('/:id', loyaltyCardController.getLoyaltyCardById);
router.put('/:id', loyaltyCardController.updateLoyaltyCard);
router.delete('/:id', loyaltyCardController.deleteLoyaltyCard);

module.exports = router;
