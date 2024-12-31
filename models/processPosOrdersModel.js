const db = require('../config/database');

class ProcessPosOrders {
    async createOrder(data) {
        const sql = `
            INSERT INTO process_pos_orders 
            (sno, order_no, order_date, name, last_name, email, phone, city, state, item_code, 
             quantity, rate, amount, discount, billing_address, shipping_address, payment, 
             cancel_reason, tax_inclusive, total_discount, shipping, item_name, currency) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.sno, data.order_no, data.order_date, data.name, data.last_name, data.email, 
            data.phone, data.city, data.state, data.item_code, data.quantity, data.rate, 
            data.amount, data.discount, data.billing_address, data.shipping_address, 
            data.payment, data.cancel_reason, data.tax_inclusive, data.total_discount, 
            data.shipping, data.item_name, data.currency
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllOrders() {
        const sql = `SELECT * FROM process_pos_orders`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getOrderById(id) {
        const sql = `SELECT * FROM process_pos_orders WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateOrder(id, data) {
        const sql = `
            UPDATE process_pos_orders
            SET sno = ?, order_no = ?, order_date = ?, name = ?, last_name = ?, email = ?, 
                phone = ?, city = ?, state = ?, item_code = ?, quantity = ?, rate = ?, 
                amount = ?, discount = ?, billing_address = ?, shipping_address = ?, 
                payment = ?, cancel_reason = ?, tax_inclusive = ?, total_discount = ?, 
                shipping = ?, item_name = ?, currency = ?
            WHERE id = ?
        `;
        const values = [
            data.sno, data.order_no, data.order_date, data.name, data.last_name, data.email, 
            data.phone, data.city, data.state, data.item_code, data.quantity, data.rate, 
            data.amount, data.discount, data.billing_address, data.shipping_address, 
            data.payment, data.cancel_reason, data.tax_inclusive, data.total_discount, 
            data.shipping, data.item_name, data.currency, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteOrder(id) {
        const sql = `DELETE FROM process_pos_orders WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new ProcessPosOrders();
