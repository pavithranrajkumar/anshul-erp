const db = require('../config/database');

class POSOrder {
    async createOrder(data) {
        const sql = `
            INSERT INTO pos_orders 
            (pack_unit, pack_qty, unit, quantity, free_quantity, rate, amount, discount, taxcode, taxrate, 
             taxable, taxamount, cess_rate, cess_amount, mrp, net_rate, remark, item_barcode, itembalance, 
             barcode, line_level_barcode, igst, cgst, sgst, hsn_code, brand) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount, 
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount, 
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.itembalance, data.barcode, 
            data.line_level_barcode, data.igst, data.cgst, data.sgst, data.hsn_code, data.brand
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllOrders() {
        const sql = `SELECT * FROM pos_orders`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getOrderById(id) {
        const sql = `SELECT * FROM pos_orders WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateOrder(id, data) {
        const sql = `
            UPDATE pos_orders
            SET pack_unit = ?, pack_qty = ?, unit = ?, quantity = ?, free_quantity = ?, rate = ?, amount = ?, 
                discount = ?, taxcode = ?, taxrate = ?, taxable = ?, taxamount = ?, cess_rate = ?, cess_amount = ?, 
                mrp = ?, net_rate = ?, remark = ?, item_barcode = ?, itembalance = ?, barcode = ?, 
                line_level_barcode = ?, igst = ?, cgst = ?, sgst = ?, hsn_code = ?, brand = ?
            WHERE id = ?
        `;
        const values = [
            data.pack_unit, data.pack_qty, data.unit, data.quantity, data.free_quantity, data.rate, data.amount, 
            data.discount, data.taxcode, data.taxrate, data.taxable, data.taxamount, data.cess_rate, data.cess_amount, 
            data.mrp, data.net_rate, data.remark, data.item_barcode, data.itembalance, data.barcode, 
            data.line_level_barcode, data.igst, data.cgst, data.sgst, data.hsn_code, data.brand, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteOrder(id) {
        const sql = `DELETE FROM pos_orders WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new POSOrder();
