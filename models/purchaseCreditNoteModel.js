const db = require('../config/database');

class PurchaseCreditNote {
    async createPurchaseCreditNote(data) {
        const sql = `
            INSERT INTO purchase_credit_notes (
                pack_unit, pack_qty, unit, quantity, rate, amount, discount, taxcode, taxrate,
                taxable, taxamount, cess_rate, cess_amount, mrp, net_rate, remarks, item_barcode, 
                posting_gl, pi_vno, pi_ref_no, pi_ref_date, pi_vdate, item_balance, barcode, 
                line_level_barcode, lgst, cgst, sgst, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.rate, data.amount, 
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, 
            data.cess_amount, data.mrp, data.net_rate, data.remarks, data.item_barcode, data.posting_gl, 
            data.pi_vno, data.pi_ref_no, data.pi_ref_date, data.pi_vdate, data.item_balance, data.barcode, 
            data.line_level_barcode, data.lgst, data.cgst, data.sgst, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPurchaseCreditNotes() {
        const sql = 'SELECT * FROM purchase_credit_notes';
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPurchaseCreditNoteById(id) {
        const sql = 'SELECT * FROM purchase_credit_notes WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePurchaseCreditNote(id, data) {
        const sql = `
            UPDATE purchase_credit_notes SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, rate = ?, amount = ?, discount = ?, 
                taxcode = ?, taxrate = ?, taxable = ?, taxamount = ?, cess_rate = ?, cess_amount = ?, 
                mrp = ?, net_rate = ?, remarks = ?, item_barcode = ?, posting_gl = ?, pi_vno = ?, 
                pi_ref_no = ?, pi_ref_date = ?, pi_vdate = ?, item_balance = ?, barcode = ?, 
                line_level_barcode = ?, lgst = ?, cgst = ?, sgst = ?, hsn_code = ?, brand = ? 
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.rate, data.amount, 
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, 
            data.cess_amount, data.mrp, data.net_rate, data.remarks, data.item_barcode, data.posting_gl, 
            data.pi_vno, data.pi_ref_no, data.pi_ref_date, data.pi_vdate, data.item_balance, data.barcode, 
            data.line_level_barcode, data.lgst, data.cgst, data.sgst, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePurchaseCreditNote(id) {
        const sql = 'DELETE FROM purchase_credit_notes WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PurchaseCreditNote();
