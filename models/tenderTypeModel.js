const db = require('../config/database');

class TenderType {
    async createTenderType(data) {
        const sql = `
            INSERT INTO tender_type 
            (description, code, type, posting_gl) 
            VALUES (?, ?, ?, ?)
        `;
        const values = [data.description, data.code, data.type, data.posting_gl];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllTenderTypes() {
        const sql = `SELECT * FROM tender_type`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getTenderTypeById(id) {
        const sql = `SELECT * FROM tender_type WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateTenderType(id, data) {
        const sql = `
            UPDATE tender_type 
            SET description = ?, code = ?, type = ?, posting_gl = ? 
            WHERE id = ?
        `;
        const values = [data.description, data.code, data.type, data.posting_gl, id];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteTenderType(id) {
        const sql = `DELETE FROM tender_type WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new TenderType();
