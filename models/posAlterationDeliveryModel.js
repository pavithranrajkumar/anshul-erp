const db = require('../config/database');

class POSAlterationDelivery {
    // Create a new POS Alteration Delivery
    async createAlterationDelivery(data) {
        const sql = `
            INSERT INTO pos_alteration_delivery 
            (counter, delivery_no, date, customer, order_no, trial_date, delivery_date, description, 
             no_of_pcs, charges_on_delivery, alteration_description) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.counter, data.delivery_no, data.date, data.customer, data.order_no, data.trial_date,
            data.delivery_date, data.description, data.no_of_pcs, data.charges_on_delivery, data.alteration_description
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all POS Alteration Deliveries
    async getAllAlterationDeliveries() {
        const sql = `SELECT * FROM pos_alteration_delivery`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a single POS Alteration Delivery by ID
    async getAlterationDeliveryById(id) {
        const sql = `SELECT * FROM pos_alteration_delivery WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a POS Alteration Delivery by ID
    async updateAlterationDelivery(id, data) {
        const sql = `
            UPDATE pos_alteration_delivery 
            SET counter = ?, delivery_no = ?, date = ?, customer = ?, order_no = ?, trial_date = ?, 
                delivery_date = ?, description = ?, no_of_pcs = ?, charges_on_delivery = ?, 
                alteration_description = ?
            WHERE id = ?
        `;
        const values = [
            data.counter, data.delivery_no, data.date, data.customer, data.order_no, data.trial_date,
            data.delivery_date, data.description, data.no_of_pcs, data.charges_on_delivery, data.alteration_description,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a POS Alteration Delivery by ID
    async deleteAlterationDelivery(id) {
        const sql = `DELETE FROM pos_alteration_delivery WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new POSAlterationDelivery();
