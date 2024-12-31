const pool = require('../config/database');

class Franchise {
    async findAll() {
        const connection = await pool.getConnection();
        const sql = 'SELECT * FROM franchises';
        const [rows] = await connection.query(sql);
        connection.release();
        return rows;
    }

    async findById(id) {
        const connection = await pool.getConnection();
        const sql = 'SELECT * FROM franchises WHERE id = ?';
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        return rows[0];
    }

    async create(newFranchise) {
        const { name, email, password, location, city } = newFranchise;
        const connection = await pool.getConnection();
        const sql = `
            INSERT INTO franchises (name, email, password, location, city)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [name, email, password, location, city];
        const result = await connection.query(sql, values);
        connection.release();
        return { id: result[0].insertId, ...newFranchise };
    }

    async update(id, franchiseData) {
        const { name, email, password, location, city } = franchiseData;
        const connection = await pool.getConnection();
        const sql = `
            UPDATE franchises 
            SET name = ?, email = ?, password = ?, location = ?, city = ?
            WHERE id = ?
        `;
        await connection.query(sql, [name, email, password, location, city, id]);
        connection.release();
        return { id, ...franchiseData };
    }

    async delete(id) {
        const connection = await pool.getConnection();
        const sql = 'DELETE FROM franchises WHERE id = ?';
        await connection.query(sql, [id]);
        connection.release();
        return { message: 'Franchise deleted successfully' };
    }
}

module.exports = new Franchise();
