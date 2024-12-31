const db = require('../config/database');

class Supplier {
    async createSupplier(supplierData) {
        const sql = `INSERT INTO suppliers SET ?`;
        const [result] = await db.query(sql, supplierData);
        return result;
    }

    async getSuppliers() {
        const sql = `SELECT * FROM suppliers`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getSupplierById(id) {
        const sql = `SELECT * FROM suppliers WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateSupplier(id, supplierData) {
        const sql = `UPDATE suppliers SET ? WHERE id = ?`;
        const [result] = await db.query(sql, [supplierData, id]);
        return result;
    }

    async deleteSupplier(id) {
        const sql = `DELETE FROM suppliers WHERE id = ?`;
        const [result] = await db.query(sql, [id]);
        return result;
    }
}

module.exports = new Supplier();
