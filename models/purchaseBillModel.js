const db = require('../config/database');

class PurchaseBill {
    async createPurchaseBill(data) {
        const sql = `
            INSERT INTO purchase_bills (
                pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, discount, taxcode, taxrate,
                taxable, taxamount, cess_rate, cess_amount, mrp, net_rate, remarks, item_barcode, posting_gl,
                po_vno, po_ref_no, po_ref_date, po_vdate, bd_batch_no, bd_mfg_date, bd_exp_date, bd_sale_rate,
                item_balance, barcode, line_level_barcode, lgst, cgst, sgst, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount,
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount,
            data.mrp, data.net_rate, data.remarks, data.item_barcode, data.posting_gl, data.po_vno, data.po_ref_no,
            data.po_ref_date, data.po_vdate, data.bd_batch_no, data.bd_mfg_date, data.bd_exp_date, data.bd_sale_rate,
            data.item_balance, data.barcode, data.line_level_barcode, data.lgst, data.cgst, data.sgst,
            data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPurchaseBills() {
        const sql = 'SELECT * FROM purchase_bills';
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPurchaseBillById(id) {
        const sql = 'SELECT * FROM purchase_bills WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePurchaseBill(id, data) {
        const sql = `
            UPDATE purchase_bills SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?, amount = ?, 
                discount = ?, taxcode = ?, taxrate = ?, taxable = ?, taxamount = ?, cess_rate = ?, cess_amount = ?, 
                mrp = ?, net_rate = ?, remarks = ?, item_barcode = ?, posting_gl = ?, po_vno = ?, po_ref_no = ?, 
                po_ref_date = ?, po_vdate = ?, bd_batch_no = ?, bd_mfg_date = ?, bd_exp_date = ?, bd_sale_rate = ?, 
                item_balance = ?, barcode = ?, line_level_barcode = ?, lgst = ?, cgst = ?, sgst = ?, hsn_code = ?, 
                brand = ? 
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount,
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount,
            data.mrp, data.net_rate, data.remarks, data.item_barcode, data.posting_gl, data.po_vno, data.po_ref_no,
            data.po_ref_date, data.po_vdate, data.bd_batch_no, data.bd_mfg_date, data.bd_exp_date, data.bd_sale_rate,
            data.item_balance, data.barcode, data.line_level_barcode, data.lgst, data.cgst, data.sgst,
            data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePurchaseBill(id) {
        const sql = 'DELETE FROM purchase_bills WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PurchaseBill();
