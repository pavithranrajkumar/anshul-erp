const db = require('../config/database'); // Assuming you have a `database.js` file for DB connection

class POSInvoice {
    async createInvoice(data) {
        const sql = `
            INSERT INTO pos_invoices 
            (pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, discount, taxcode, taxrate, 
            taxable, taxamount, cess_rate, cess_amount, mrp, net_rate, remark, item_barcode, posting_gl, 
            promo_quantity, promotion, pos_order_vno, pos_order_ref_no, pos_order_ref_date, pos_order_vdate, 
            bd_batch_no, bd_mfg_date, bd_exp_date, bd_sale_rate, item_balance, barcode, line_level_barcode, 
            igst, cgst, sgst, hsn_code, brand)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount, 
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount, 
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.posting_gl, data.promo_quantity, data.promotion, 
            data.pos_order_vno, data.pos_order_ref_no, data.pos_order_ref_date, data.pos_order_vdate, data.bd_batch_no, 
            data.bd_mfg_date, data.bd_exp_date, data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode, 
            data.igst, data.cgst, data.sgst, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllInvoices() {
        const sql = `SELECT * FROM pos_invoices`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getInvoiceById(id) {
        const sql = `SELECT * FROM pos_invoices WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateInvoice(id, data) {
        const sql = `
            UPDATE pos_invoices 
            SET pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?, amount = ?, discount = ?, 
                taxcode = ?, taxrate = ?, taxable = ?, taxamount = ?, cess_rate = ?, cess_amount = ?, mrp = ?, 
                net_rate = ?, remark = ?, item_barcode = ?, posting_gl = ?, promo_quantity = ?, promotion = ?, 
                pos_order_vno = ?, pos_order_ref_no = ?, pos_order_ref_date = ?, pos_order_vdate = ?, bd_batch_no = ?, 
                bd_mfg_date = ?, bd_exp_date = ?, bd_sale_rate = ?, item_balance = ?, barcode = ?, line_level_barcode = ?, 
                igst = ?, cgst = ?, sgst = ?, hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount, data.discount, 
            data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount, data.mrp, data.net_rate, 
            data.remark, data.item_barcode, data.posting_gl, data.promo_quantity, data.promotion, data.pos_order_vno, 
            data.pos_order_ref_no, data.pos_order_ref_date, data.pos_order_vdate, data.bd_batch_no, data.bd_mfg_date, 
            data.bd_exp_date, data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode, data.igst, 
            data.cgst, data.sgst, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteInvoice(id) {
        const sql = `DELETE FROM pos_invoices WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new POSInvoice();
