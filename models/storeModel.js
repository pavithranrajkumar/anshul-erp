const db = require('../config/database');

class Store {
    // Create a new store
    async createStore(data) {
        const sql = `
            INSERT INTO stores (name, email, mobileno, password, start_date, end_date, showroom, ownername, address, city, pincode, state, created_on)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.name,
            data.email,
            data.mobileno,
            data.password,
            data.start_date,
            data.end_date,
            data.showroom,
            data.ownername,
            data.address,
            data.city,
            data.pincode,
            data.state,
            new Date(),
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all stores
    async getStores() {
        const sql = `SELECT id, name, email, mobileno, showroom, ownername, city, state FROM stores`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get store by ID
    async getStoreById(id) {
        const sql = `SELECT * FROM stores WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update store
    async updateStore(id, data) {
        const sql = `
            UPDATE stores SET
                name = ?, email = ?, mobileno = ?, password = ?, start_date = ?, end_date = ?, showroom = ?, ownername = ?, address = ?, city = ?, pincode = ?, state = ?
            WHERE id = ?
        `;
        const values = [
            data.name,
            data.email,
            data.mobileno,
            data.password,
            data.start_date,
            data.end_date,
            data.showroom,
            data.ownername,
            data.address,
            data.city,
            data.pincode,
            data.state,
            id,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete store
    async deleteStore(id) {
        const sql = `DELETE FROM stores WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new Store();
