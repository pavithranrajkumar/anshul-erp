const db = require('../config/database');

class Promotion {
    async createPromotion(data) {
        const sql = `
            INSERT INTO promotions 
            (description, type, from_period, to_period, happy_hour_from, happy_hour_to, 
            discount_on, discount_rate, skip_location) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description, data.type, data.from_period, data.to_period,
            data.happy_hour_from, data.happy_hour_to, data.discount_on,
            data.discount_rate, data.skip_location
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPromotions() {
        const sql = `SELECT * FROM promotions`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPromotionById(id) {
        const sql = `SELECT * FROM promotions WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePromotion(id, data) {
        const sql = `
            UPDATE promotions 
            SET description = ?, type = ?, from_period = ?, to_period = ?, 
                happy_hour_from = ?, happy_hour_to = ?, discount_on = ?, 
                discount_rate = ?, skip_location = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        `;
        const values = [
            data.description, data.type, data.from_period, data.to_period,
            data.happy_hour_from, data.happy_hour_to, data.discount_on,
            data.discount_rate, data.skip_location, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePromotion(id) {
        const sql = `DELETE FROM promotions WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new Promotion();
