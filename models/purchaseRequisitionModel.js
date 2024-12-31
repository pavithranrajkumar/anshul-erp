const db = require('../config/database');

class PurchaseRequisition {
    // Create a new purchase requisition
    static async createPurchaseRequisition(data) {
        const sql = `
            INSERT INTO purchase_requisitions (
                pack_unit, pack_qty, unit, quantity, rate, amount, mrp, net_rate, remark,
                item_barcode, item_balance, line_level_barcode, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.rate, data.amount,
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.item_balance,
            data.line_level_barcode, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all purchase requisitions
    static async getAllPurchaseRequisitions() {
        const sql = 'SELECT * FROM purchase_requisitions';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a purchase requisition by ID
    static async getPurchaseRequisitionById(id) {
        const sql = 'SELECT * FROM purchase_requisitions WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a purchase requisition by ID
    static async updatePurchaseRequisition(id, data) {
        const sql = `
            UPDATE purchase_requisitions SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, rate = ?, amount = ?,
                mrp = ?, net_rate = ?, remark = ?, item_barcode = ?, item_balance = ?,
                line_level_barcode = ?, hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.rate, data.amount,
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.item_balance,
            data.line_level_barcode, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a purchase requisition by ID
    static async deletePurchaseRequisition(id) {
        const sql = 'DELETE FROM purchase_requisitions WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = PurchaseRequisition;
