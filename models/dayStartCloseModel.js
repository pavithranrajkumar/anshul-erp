const db = require('../config/database');

class DayStartClose {
    async createEntry(data) {
        const sql = `
            INSERT INTO day_start_close 
            (counter, type, voucher_date, time, sno, denomination, number, amount) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.counter ?? null,
            data.type ?? null,
            data.voucher_date ?? null,
            data.time ?? null,
            data.sno ?? null,
            data.denomination ?? null,
            data.number ?? null,
            data.amount ?? null
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllEntries() {
        const sql = `SELECT * FROM day_start_close`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getEntryById(id) {
        const sql = `SELECT * FROM day_start_close WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateEntry(id, data) {
        const sql = `
            UPDATE day_start_close 
            SET counter = ?, type = ?, voucher_date = ?, time = ?, sno = ?, denomination = ?, 
                number = ?, amount = ? 
            WHERE id = ?
        `;
        const values = [
            data.counter ?? null,
            data.type ?? null,
            data.voucher_date ?? null,
            data.time ?? null,
            data.sno ?? null,
            data.denomination ?? null,
            data.number ?? null,
            data.amount ?? null,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteEntry(id) {
        const sql = `DELETE FROM day_start_close WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new DayStartClose();
