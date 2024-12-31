const db = require('../config/database');

class GoodsReceiptNote {
    // Create a new GRN entry
    async createGoodsReceiptNote(data) {
        const sql = `
            INSERT INTO goods_receipt_notes (
                pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, mrp, net_rate,
                remark, item_barcode, po_vno, po_ref_no, po_ref_date, po_vdate, bd_batch_no,
                bd_exp_date, bd_sale_rate, item_balance, barcode, line_level_barcode, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate,
            data.amount, data.mrp, data.net_rate, data.remark, data.item_barcode, data.po_vno,
            data.po_ref_no, data.po_ref_date, data.po_vdate, data.bd_batch_no, data.bd_exp_date,
            data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all GRN entries
    async getGoodsReceiptNotes() {
        const sql = 'SELECT * FROM goods_receipt_notes';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a GRN entry by ID
    async getGoodsReceiptNoteById(id) {
        const sql = 'SELECT * FROM goods_receipt_notes WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a GRN entry by ID
    async updateGoodsReceiptNote(id, data) {
        const sql = `
            UPDATE goods_receipt_notes SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?, 
                amount = ?, mrp = ?, net_rate = ?, remark = ?, item_barcode = ?, po_vno = ?, 
                po_ref_no = ?, po_ref_date = ?, po_vdate = ?, bd_batch_no = ?, bd_exp_date = ?, 
                bd_sale_rate = ?, item_balance = ?, barcode = ?, line_level_barcode = ?, 
                hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate,
            data.amount, data.mrp, data.net_rate, data.remark, data.item_barcode, data.po_vno,
            data.po_ref_no, data.po_ref_date, data.po_vdate, data.bd_batch_no, data.bd_exp_date,
            data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a GRN entry by ID
    async deleteGoodsReceiptNote(id) {
        const sql = 'DELETE FROM goods_receipt_notes WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new GoodsReceiptNote();
