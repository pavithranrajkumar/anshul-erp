const db = require('../config/database');

class LoyaltyCard {
    async createLoyaltyCard(data) {
        const sql = `
            INSERT INTO loyalty_card 
            (description, per_amount, calculation_on, no_of_points, redeem_amount_per_point, 
            minimum_redeem_points, birthday_discount, anniversary_discount) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description, data.per_amount, data.calculation_on, data.no_of_points,
            data.redeem_amount_per_point, data.minimum_redeem_points,
            data.birthday_discount, data.anniversary_discount
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllLoyaltyCards() {
        const sql = `SELECT * FROM loyalty_card`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getLoyaltyCardById(id) {
        const sql = `SELECT * FROM loyalty_card WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateLoyaltyCard(id, data) {
        const sql = `
            UPDATE loyalty_card 
            SET description = ?, per_amount = ?, calculation_on = ?, no_of_points = ?, 
                redeem_amount_per_point = ?, minimum_redeem_points = ?, birthday_discount = ?, 
                anniversary_discount = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        `;
        const values = [
            data.description, data.per_amount, data.calculation_on, data.no_of_points,
            data.redeem_amount_per_point, data.minimum_redeem_points,
            data.birthday_discount, data.anniversary_discount, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteLoyaltyCard(id) {
        const sql = `DELETE FROM loyalty_card WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new LoyaltyCard();
