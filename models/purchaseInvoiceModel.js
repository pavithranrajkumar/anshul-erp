const db = require('../config/database');

class PurchaseInvoice {
    // Create a new purchase invoice from order
    async createPurchaseInvoice(data) {
        const sql = `
            INSERT INTO purchase_invoices (
                date, vno, ref_date, ref_no, party_id, location_id, bill_amount
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.date, data.vno, data.ref_date, data.ref_no, data.party_id, data.location_id, data.bill_amount
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all purchase invoices
    async getAllPurchaseInvoices() {
        const sql = 'SELECT * FROM purchase_invoices';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a purchase invoice by ID
    async getPurchaseInvoiceById(id) {
        const sql = 'SELECT * FROM purchase_invoices WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a purchase invoice by ID
    async updatePurchaseInvoice(id, data) {
        const sql = `
            UPDATE purchase_invoices SET
                date = ?, vno = ?, ref_date = ?, ref_no = ?, party_id = ?, location_id = ?, bill_amount = ?
            WHERE id = ?
        `;
        const values = [
            data.date, data.vno, data.ref_date, data.ref_no, data.party_id, data.location_id, data.bill_amount, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a purchase invoice by ID
    async deletePurchaseInvoice(id) {
        const sql = 'DELETE FROM purchase_invoices WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new PurchaseInvoice();
