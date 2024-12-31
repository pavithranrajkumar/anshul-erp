const express = require('express');
const multer = require('multer');
const path = require('path');
const supplierController = require('../controllers/supplierController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), supplierController.createSupplier);
router.get('/', supplierController.getSuppliers);
router.get('/:id', supplierController.getSupplierById);
router.put('/:id', upload.single('image'), supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
