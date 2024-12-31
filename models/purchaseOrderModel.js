const db = require('../config/database');

class PurchaseOrder {
    // Create a new purchase order
    static async createPurchaseOrder(data) {
        const sql = `
            INSERT INTO purchase_orders (
                pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, discount, tax_code,
                tax_rate, taxable, tax_amount, cess_rate, cess_amount, mrp, net_rate, remarks,
                item_barcode, req_vno, req_ref_no, req_ref_date, req_vdate, item_balance, barcode,
                line_level_barcode, lgst, cgst, sgst, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate,
            data.amount, data.discount, data.tax_code, data.tax_rate, data.taxable, data.tax_amount,
            data.cess_rate, data.cess_amount, data.mrp, data.net_rate, data.remarks, data.item_barcode,
            data.req_vno, data.req_ref_no, data.req_ref_date, data.req_vdate, data.item_balance,
            data.barcode, data.line_level_barcode, data.lgst, data.cgst, data.sgst, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all purchase orders
    static async getAllPurchaseOrders() {
        const sql = 'SELECT * FROM purchase_orders';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a purchase order by ID
    static async getPurchaseOrderById(id) {
        const sql = 'SELECT * FROM purchase_orders WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a purchase order by ID
    static async updatePurchaseOrder(id, data) {
        const sql = `
            UPDATE purchase_orders SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?, 
                amount = ?, discount = ?, tax_code = ?, tax_rate = ?, taxable = ?, tax_amount = ?, 
                cess_rate = ?, cess_amount = ?, mrp = ?, net_rate = ?, remarks = ?, item_barcode = ?, 
                req_vno = ?, req_ref_no = ?, req_ref_date = ?, req_vdate = ?, item_balance = ?, 
                barcode = ?, line_level_barcode = ?, lgst = ?, cgst = ?, sgst = ?, hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate,
            data.amount, data.discount, data.tax_code, data.tax_rate, data.taxable, data.tax_amount,
            data.cess_rate, data.cess_amount, data.mrp, data.net_rate, data.remarks, data.item_barcode,
            data.req_vno, data.req_ref_no, data.req_ref_date, data.req_vdate, data.item_balance,
            data.barcode, data.line_level_barcode, data.lgst, data.cgst, data.sgst, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a purchase order by ID
    static async deletePurchaseOrder(id) {
        const sql = 'DELETE FROM purchase_orders WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = PurchaseOrder;
