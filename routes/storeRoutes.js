const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

// Routes for store management
router.post('/', storeController.createStore);
router.get('/', storeController.getStores);
router.get('/:id', storeController.getStoreById);
router.put('/:id', storeController.updateStore);
router.delete('/:id', storeController.deleteStore);

module.exports = router;
