const express = require('express');
const goodsReceiptNoteController = require('../controllers/goodsReceiptNoteController');

const router = express.Router();

// Routes for Goods Receipt Notes
router.post('/', goodsReceiptNoteController.createGoodsReceiptNote);
router.get('/', goodsReceiptNoteController.getGoodsReceiptNotes);
router.get('/:id', goodsReceiptNoteController.getGoodsReceiptNoteById);
router.put('/:id', goodsReceiptNoteController.updateGoodsReceiptNote);
router.delete('/:id', goodsReceiptNoteController.deleteGoodsReceiptNote);

module.exports = router;
