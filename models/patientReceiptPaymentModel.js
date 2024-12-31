const db = require('../config/database');

class PatientReceiptPayment {
    async createPaymentReceipt(data) {
        const sql = `
            INSERT INTO patient_receipt_payments
            (payment_receipt, counter, voucher_no, date, customer, against_tender, amount, debit_ledger, 
             cheque_no, bank_ref, remark, name, phone, dob, balance_point, last_visit, email, anniversary, o_s) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.payment_receipt ?? null,
            data.counter ?? null,
            data.voucher_no ?? null,
            data.date ?? null,
            data.customer ?? null,
            data.against_tender ?? null,
            data.amount ?? null,
            data.debit_ledger ?? null,
            data.cheque_no ?? null,
            data.bank_ref ?? null,
            data.remark ?? null,
            data.name ?? null,
            data.phone ?? null,
            data.dob ?? null,
            data.balance_point ?? null,
            data.last_visit ?? null,
            data.email ?? null,
            data.anniversary ?? null,
            data.o_s ?? null
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPaymentReceipts() {
        const sql = `SELECT * FROM patient_receipt_payments`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPaymentReceiptById(id) {
        const sql = `SELECT * FROM patient_receipt_payments WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePaymentReceipt(id, data) {
        const sql = `
            UPDATE patient_receipt_payments
            SET payment_receipt = ?, counter = ?, voucher_no = ?, date = ?, customer = ?, against_tender = ?, 
                amount = ?, debit_ledger = ?, cheque_no = ?, bank_ref = ?, remark = ?, name = ?, phone = ?, dob = ?, 
                balance_point = ?, last_visit = ?, email = ?, anniversary = ?, o_s = ?
            WHERE id = ?
        `;
        const values = [
            data.payment_receipt ?? null,
            data.counter ?? null,
            data.voucher_no ?? null,
            data.date ?? null,
            data.customer ?? null,
            data.against_tender ?? null,
            data.amount ?? null,
            data.debit_ledger ?? null,
            data.cheque_no ?? null,
            data.bank_ref ?? null,
            data.remark ?? null,
            data.name ?? null,
            data.phone ?? null,
            data.dob ?? null,
            data.balance_point ?? null,
            data.last_visit ?? null,
            data.email ?? null,
            data.anniversary ?? null,
            data.o_s ?? null,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePaymentReceipt(id) {
        const sql = `DELETE FROM patient_receipt_payments WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PatientReceiptPayment();
