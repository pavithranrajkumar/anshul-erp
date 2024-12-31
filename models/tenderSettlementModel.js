const db = require('../config/database');

class TenderSettlement {
    async createSettlement(data) {
        const sql = `
            INSERT INTO tender_settlements 
            (sno, against_bill_no, bill_date, tender_amount, pending, amount, charges) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.sno,
            data.against_bill_no,
            data.bill_date,
            data.tender_amount,
            data.pending,
            data.amount,
            data.charges,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllSettlements() {
        const sql = `SELECT * FROM tender_settlements`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getSettlementById(id) {
        const sql = `SELECT * FROM tender_settlements WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateSettlement(id, data) {
        const sql = `
            UPDATE tender_settlements
            SET sno = ?, against_bill_no = ?, bill_date = ?, tender_amount = ?, 
                pending = ?, amount = ?, charges = ?
            WHERE id = ?
        `;
        const values = [
            data.sno,
            data.against_bill_no,
            data.bill_date,
            data.tender_amount,
            data.pending,
            data.amount,
            data.charges,
            id,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteSettlement(id) {
        const sql = `DELETE FROM tender_settlements WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new TenderSettlement();
