const db = require('../config/database');

class User {
    // Create a new user
    async createUser(data) {
        const sql = `
            INSERT INTO users (name, email, contactNumber, password, termsAccepted)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
            data.name,
            data.email,
            data.contactNumber,
            data.password,
            data.termsAccepted || false,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all users
    async getUsers() {
        const sql = `SELECT id, name, email, contactNumber, termsAccepted FROM users`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get user by ID
    async getUserById(id) {
        const sql = `SELECT id, name, email, contactNumber, termsAccepted FROM users WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update user
    async updateUser(id, data) {
        const sql = `
            UPDATE users SET
                name = ?, email = ?, contactNumber = ?, password = ?, termsAccepted = ?
            WHERE id = ?
        `;
        const values = [
            data.name,
            data.email,
            data.contactNumber,
            data.password,
            data.termsAccepted || false,
            id,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete user
    async deleteUser(id) {
        const sql = `DELETE FROM users WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new User();
