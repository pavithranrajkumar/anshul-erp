const db = require('../config/database');

class AlterationOrder {
    async createOrder(data) {
        const sql = `
            INSERT INTO alteration_orders 
            (counter, voucher_no, date, customer, trial_date, delivery_date, description, no_of_pcs, 
             charges_on_delivery, alteration_description) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.counter, data.voucher_no, data.date, data.customer, data.trial_date, 
            data.delivery_date, data.description, data.no_of_pcs, data.charges_on_delivery, 
            data.alteration_description
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllOrders() {
        const sql = `SELECT * FROM alteration_orders`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getOrderById(id) {
        const sql = `SELECT * FROM alteration_orders WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateOrder(id, data) {
        const sql = `
            UPDATE alteration_orders
            SET counter = ?, voucher_no = ?, date = ?, customer = ?, trial_date = ?, delivery_date = ?, 
                description = ?, no_of_pcs = ?, charges_on_delivery = ?, alteration_description = ?
            WHERE id = ?
        `;
        const values = [
            data.counter, data.voucher_no, data.date, data.customer, data.trial_date, data.delivery_date, 
            data.description, data.no_of_pcs, data.charges_on_delivery, data.alteration_description, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteOrder(id) {
        const sql = `DELETE FROM alteration_orders WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new AlterationOrder();
