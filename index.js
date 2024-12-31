const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors'); // Add this lineconst
const companySetupRoutes = require('./routes/companySetupRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const generalSetupRoutes = require('./routes/generalSetupRoutes');
const financeSetupRoutes = require('./routes/financeSetupRoutes');
const inventorySetupRoutes = require('./routes/inventorySetupRoutes');
const purchaseSetupRoutes = require('./routes/purchaseSetupRoutes');
const salesSetupRoutes = require('./routes/salesSetupRoutes');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const franchiseRouter = require('./routes/franchiseRoutes'); // New Franchise routes
const vendorRoutes = require('./routes/vendorRoutes');
const priceListRoutes = require('./routes/priceListRoutes');
const partyPurchaseDiscountRoutes = require('./routes/partyPurchaseDiscountRoutes');
const brandwisePurchaseDiscountRoutes = require('./routes/brandwisePurchaseDiscountRoutes');
const brandPartyPurchaseDiscountRoutes = require('./routes/brandPartyPurchaseDiscountRoutes');
const purchaseRequisitionRoutes = require('./routes/purchaseRequisitionRoutes');
const purchaseOrderRoutes = require('./routes/purchaseOrderRoutes');
const goodsReceiptNoteRoutes = require('./routes/goodsReceiptNoteRoutes');
const purchaseReturnChannelRoutes = require('./routes/purchaseReturnChannelRoutes');
const purchaseBillRoutes = require('./routes/purchaseBillRoutes');
const purchaseCreditNoteRoutes = require('./routes/purchaseCreditNoteRoutes');
const purchaseDebitNoteRoutes = require('./routes/purchaseDebitNoteRoutes');
const purchaseReturnRoutes = require('./routes/purchaseReturnRoutes');
const purchaseInvoiceRoutes = require('./routes/purchaseInvoiceRoutes');
const billPaymentRoutes = require('./routes/billPaymentRoutes');
const schemaEvolutionRoutes = require('./routes/schemaEvolutionRoutes');
const patientMasterRoutes = require('./routes/patientMasterRoutes');
const couponMasterRoutes = require('./routes/couponMasterRoutes');
const counterRoutes = require('./routes/counterRoutes');
const tenderTypeRoutes = require('./routes/tenderTypeRoutes');
const loyaltyCardRoutes = require('./routes/loyaltyCardRoutes');
const promotionsRoutes = require('./routes/promotionsRoutes');
const posOrderRoutes = require('./routes/posOrderRoutes');
const processPosOrdersRoutes = require('./routes/processPosOrdersRoutes');
const alterationOrderRoutes = require('./routes/alterationOrderRoutes');
const posAlterationDeliveryRoutes = require('./routes/posAlterationDeliveryRoutes');
const itemWeighmentRoutes = require('./routes/itemWeighmentRoutes'); // Add this line
const posInvoiceRoutes = require('./routes/posInvoiceRoutes');
const patientReceiptPaymentRouter = require('./routes/patientReceiptPaymentRouter');
const dayStartCloseRoutes = require('./routes/dayStartCloseRoutes');
const tenderSettlementRoutes = require('./routes/tenderSettlementRoutes');

const PORT = process.env.PORT || 8000;

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Add this line

app.use(express.json()); // Body parser middleware

// Middleware
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'htmlpage')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmlpage', 'index.html'));
});

app.get('/policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmlpage', 'policy.html'));
});
// Routes

app.use('/api/companysetup', companySetupRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/generalsetup', generalSetupRoutes);
app.use('/api/financesetup', financeSetupRoutes);
app.use('/api/inventorysetup', inventorySetupRoutes);
app.use('/api/purchasesetup', purchaseSetupRoutes);
app.use('/api/salessetup', salesSetupRoutes);
app.use('/api/users', userRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/franchises', franchiseRouter);
app.use('/api/vendors', vendorRoutes); // Use multer for handling file uploads
app.use('/api/pricelists', priceListRoutes);
app.use('/api/partypurchesh', partyPurchaseDiscountRoutes);
app.use('/api/brandwise', brandwisePurchaseDiscountRoutes);
app.use('/api/brandpartydiscount', brandPartyPurchaseDiscountRoutes);
app.use('/api/purchaseRequisition', purchaseRequisitionRoutes);
app.use('/api/purcheshorder', purchaseOrderRoutes); // Prefix the Purchase Order routes with `/api`
app.use('/api/goodsreceiptnote', goodsReceiptNoteRoutes);
app.use('/api/purchasechannels', purchaseReturnChannelRoutes);
app.use('/api/purchasebills', purchaseBillRoutes);
app.use('/api/purchasecreditnotes', purchaseCreditNoteRoutes);
app.use('/api/purchasedebitnotes', purchaseDebitNoteRoutes);
app.use('/api/purchasereturns', purchaseReturnRoutes);
app.use('/api/purchaseinvoices', purchaseInvoiceRoutes);
app.use('/api/billpayments', billPaymentRoutes);
app.use('/api/schemaevolutions', schemaEvolutionRoutes);
app.use('/api/patients', patientMasterRoutes);
app.use('/api/coupons', couponMasterRoutes);
app.use('/api/counters', counterRoutes);
app.use('/api/tendertypes', tenderTypeRoutes);
app.use('/api/loyaltycards', loyaltyCardRoutes);
app.use('/api/promotions', promotionsRoutes);
app.use('/api/posorders', posOrderRoutes);
app.use('/api/processposorders', processPosOrdersRoutes);
app.use('/api/alterationorders', alterationOrderRoutes);
app.use('/api/posalterationdeliveries', posAlterationDeliveryRoutes);
app.use('/api/itemweighments', itemWeighmentRoutes); // Add this line
app.use('/api/posinvoices', posInvoiceRoutes);
app.use('/api/patientreceiptpayments', patientReceiptPaymentRouter);
app.use('/api/daystartclose', dayStartCloseRoutes);
app.use('/api/tendersettlement', tenderSettlementRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
