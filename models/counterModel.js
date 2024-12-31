const db = require('../config/database');

class Counter {
    async createCounter(data) {
        const sql = `
            INSERT INTO counter_master 
            (counter_no, warehouse, tax_style, exchange, patient, default_invoice_print_format, 
            default_pos_customer, default_tender, hide_attribute_panel, manage_daystart, hide_tax_disc_panel)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.counter_no, data.warehouse, data.tax_style, data.exchange, data.patient,
            data.default_invoice_print_format, data.default_pos_customer, data.default_tender,
            data.hide_attribute_panel, data.manage_daystart, data.hide_tax_disc_panel,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllCounters() {
        const sql = `SELECT * FROM counter_master`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getCounterById(id) {
        const sql = `SELECT * FROM counter_master WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateCounter(id, data) {
        const sql = `
            UPDATE counter_master 
            SET counter_no = ?, warehouse = ?, tax_style = ?, exchange = ?, patient = ?, 
                default_invoice_print_format = ?, default_pos_customer = ?, default_tender = ?, 
                hide_attribute_panel = ?, manage_daystart = ?, hide_tax_disc_panel = ? 
            WHERE id = ?
        `;
        const values = [
            data.counter_no, data.warehouse, data.tax_style, data.exchange, data.patient,
            data.default_invoice_print_format, data.default_pos_customer, data.default_tender,
            data.hide_attribute_panel, data.manage_daystart, data.hide_tax_disc_panel, id,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteCounter(id) {
        const sql = `DELETE FROM counter_master WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new Counter();
