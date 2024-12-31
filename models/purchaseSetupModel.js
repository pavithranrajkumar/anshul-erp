const db = require('../config/database');

class PurchaseSetup {
    // Create a new purchase setup entry
    async createPurchaseSetup(data) {
        const sql = `
            INSERT INTO purchase_setup (
                vendorLabel, logisticDetails, documentClassification, agentWiseBilling, taxInRates, 
                purchaseStockPostingOn, purchaseReturnPostingOn, selectRateCategoryOnDocument, inputBillingChargesOnGRN
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.vendorLabel,
            data.logisticDetails || false,
            data.documentClassification || false,
            data.agentWiseBilling || false,
            data.taxInRates,
            data.purchaseStockPostingOn,
            data.purchaseReturnPostingOn,
            data.selectRateCategoryOnDocument || false,
            data.inputBillingChargesOnGRN || false
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all purchase setups
    async getPurchaseSetups() {
        const sql = `SELECT * FROM purchase_setup`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get purchase setup by ID
    async getPurchaseSetupById(id) {
        const sql = `SELECT * FROM purchase_setup WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update purchase setup
    async updatePurchaseSetup(id, data) {
        const sql = `
            UPDATE purchase_setup SET
                vendorLabel = ?, logisticDetails = ?, documentClassification = ?, agentWiseBilling = ?, 
                taxInRates = ?, purchaseStockPostingOn = ?, purchaseReturnPostingOn = ?, 
                selectRateCategoryOnDocument = ?, inputBillingChargesOnGRN = ?
            WHERE id = ?
        `;
        const values = [
            data.vendorLabel,
            data.logisticDetails || false,
            data.documentClassification || false,
            data.agentWiseBilling || false,
            data.taxInRates,
            data.purchaseStockPostingOn,
            data.purchaseReturnPostingOn,
            data.selectRateCategoryOnDocument || false,
            data.inputBillingChargesOnGRN || false,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete purchase setup
    async deletePurchaseSetup(id) {
        const sql = `DELETE FROM purchase_setup WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PurchaseSetup();
