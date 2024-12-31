const db = require('../config/database');

class PurchaseReturnChannel {
    async createPurchaseReturnChannel(data) {
        const sql = `
            INSERT INTO purchase_return_channel (
                pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, mrp, net_rate,
                remark, item_barcode, bd_batch_no, bd_mfg_date, bd_exp_date, bd_sale_rate, item_balance,
                barcode, line_level_barcode, hsn_code, brand
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount,
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.bd_batch_no, data.bd_mfg_date,
            data.bd_exp_date, data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode,
            data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPurchaseReturnChannels() {
        const sql = 'SELECT * FROM purchase_return_channel';
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPurchaseReturnChannelById(id) {
        const sql = 'SELECT * FROM purchase_return_channel WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePurchaseReturnChannel(id, data) {
        const sql = `
            UPDATE purchase_return_channel SET
                pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?,
                amount = ?, mrp = ?, net_rate = ?, remark = ?, item_barcode = ?, bd_batch_no = ?,
                bd_mfg_date = ?, bd_exp_date = ?, bd_sale_rate = ?, item_balance = ?, barcode = ?,
                line_level_barcode = ?, hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount,
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.bd_batch_no, data.bd_mfg_date,
            data.bd_exp_date, data.bd_sale_rate, data.item_balance, data.barcode, data.line_level_barcode,
            data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePurchaseReturnChannel(id) {
        const sql = 'DELETE FROM purchase_return_channel WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PurchaseReturnChannel();
