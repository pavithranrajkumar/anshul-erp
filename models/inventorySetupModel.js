const db = require('../config/database');

class InventorySetup {
    // Create a new inventory setup entry
    async createInventorySetup(data) {
        const sql = `
            INSERT INTO inventory_setup (
                itemStockUnit, warehouseOption, documentClassification, barcodeScanLookup, barcodeScanBasedOn, 
                minimumStockLevels, stockValuationMethod, considerSalesReturnInStockValuation, 
                itemCodingConfiguration, duplicateItemBasedOn, itemSelection, separatePrintDescription
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.itemStockUnit,
            data.warehouseOption,
            data.documentClassification || false,
            data.barcodeScanLookup || false,
            data.barcodeScanBasedOn,
            data.minimumStockLevels || false,
            data.stockValuationMethod,
            data.considerSalesReturnInStockValuation || false,
            data.itemCodingConfiguration,
            data.duplicateItemBasedOn,
            data.itemSelection,
            data.separatePrintDescription || false
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all inventory setups
    async getInventorySetups() {
        const sql = `SELECT * FROM inventory_setup`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get inventory setup by ID
    async getInventorySetupById(id) {
        const sql = `SELECT * FROM inventory_setup WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update inventory setup
    async updateInventorySetup(id, data) {
        const sql = `
            UPDATE inventory_setup SET
                itemStockUnit = ?, warehouseOption = ?, documentClassification = ?, barcodeScanLookup = ?, 
                barcodeScanBasedOn = ?, minimumStockLevels = ?, stockValuationMethod = ?, 
                considerSalesReturnInStockValuation = ?, itemCodingConfiguration = ?, duplicateItemBasedOn = ?, 
                itemSelection = ?, separatePrintDescription = ?
            WHERE id = ?
        `;
        const values = [
            data.itemStockUnit,
            data.warehouseOption,
            data.documentClassification || false,
            data.barcodeScanLookup || false,
            data.barcodeScanBasedOn,
            data.minimumStockLevels || false,
            data.stockValuationMethod,
            data.considerSalesReturnInStockValuation || false,
            data.itemCodingConfiguration,
            data.duplicateItemBasedOn,
            data.itemSelection,
            data.separatePrintDescription || false,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete inventory setup
    async deleteInventorySetup(id) {
        const sql = `DELETE FROM inventory_setup WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new InventorySetup();
