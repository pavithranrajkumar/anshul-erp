const db = require('../config/database'); // Assuming you have a `database.js` file for DB connection

class ItemWeighment {
    async createWeighment(data) {
        const sql = `
            INSERT INTO item_weighments (item, barcode, weight)
            VALUES (?, ?, ?)
        `;
        const values = [data.item, data.barcode, data.weight];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllWeighments() {
        const sql = `SELECT * FROM item_weighments`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getWeighmentById(id) {
        const sql = `SELECT * FROM item_weighments WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateWeighment(id, data) {
        const sql = `
            UPDATE item_weighments 
            SET item = ?, barcode = ?, weight = ?
            WHERE id = ?
        `;
        const values = [data.item, data.barcode, data.weight, id];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteWeighment(id) {
        const sql = `DELETE FROM item_weighments WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new ItemWeighment();
