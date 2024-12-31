const express = require('express');
const dayStartCloseController = require('../controllers/dayStartCloseController');

const router = express.Router();

router.post('/', dayStartCloseController.createEntry);
router.get('/', dayStartCloseController.getAllEntries);
router.get('/:id', dayStartCloseController.getEntryById);
router.put('/:id', dayStartCloseController.updateEntry);
router.delete('/:id', dayStartCloseController.deleteEntry);

module.exports = router;
