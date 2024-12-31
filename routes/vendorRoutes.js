const express = require('express');
const vendorController = require('../controllers/vendorController');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up file upload using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where files will be stored
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + fileExtension;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

// Route to create a new vendor
router.post('/', upload.single('attachment'), vendorController.createVendor);

// Route to get all vendors
router.get('/', vendorController.getVendors);

// Route to get a vendor by ID
router.get('/:id', vendorController.getVendorById);

// Route to update a vendor by ID
router.put('/:id', upload.single('attachment'), vendorController.updateVendor);

// Route to delete a vendor by ID
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
