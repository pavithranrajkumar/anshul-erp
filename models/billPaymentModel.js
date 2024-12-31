const db = require('../config/database');

class BillPayment {
    // Create a new bill payment
    async createBillPayment(data) {
        const sql = `
            INSERT INTO bill_payments (
                bill_no, bill_date, party_bill_no, party_bill_date, due_date, debit_credit, bill_amount, 
                outstanding, adjust_now, cash_discount, net_amount, bill_branch, bill_subparty, taxable
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?)
        `;
        const values = [
            data.bill_no, data.bill_date, data.party_bill_no, data.party_bill_date, data.due_date,
            data.debit_credit, data.bill_amount, data.outstanding, data.adjust_now, data.cash_discount,
            data.net_amount, data.bill_branch, data.bill_subparty, data.taxable
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all bill payments
    async getAllBillPayments() {
        const sql = 'SELECT * FROM bill_payments';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a bill payment by ID
    async getBillPaymentById(id) {
        const sql = 'SELECT * FROM bill_payments WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a bill payment by ID
    async updateBillPayment(id, data) {
        const sql = `
            UPDATE bill_payments SET
                bill_no = ?, bill_date = ?, party_bill_no = ?, party_bill_date = ?, due_date = ?, 
                debit_credit = ?, bill_amount = ?, outstanding = ?, adjust_now = ?, cash_discount = ?, 
                net_amount = ?, bill_branch = ?, bill_subparty = ?, taxable = ?
            WHERE id = ?
        `;
        const values = [
            data.bill_no, data.bill_date, data.party_bill_no, data.party_bill_date, data.due_date,
            data.debit_credit, data.bill_amount, data.outstanding, data.adjust_now, data.cash_discount,
            data.net_amount, data.bill_branch, data.bill_subparty, data.taxable, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a bill payment by ID
    async deleteBillPayment(id) {
        const sql = 'DELETE FROM bill_payments WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new BillPayment();
