const db = require('../config/database');

class SchemaEvolution {
    // Create a new schema evolution entry
    async createSchemaEvolution(data) {
        const sql = `
            INSERT INTO schema_evolution (
                target_code, target_on, target, actual, incentive_rate, incentive_amount
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.target_code, data.target_on, data.target, data.actual, data.incentive_rate, data.incentive_amount
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all schema evolution entries
    async getAllSchemaEvolutions() {
        const sql = 'SELECT * FROM schema_evolution';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a schema evolution entry by ID
    async getSchemaEvolutionById(id) {
        const sql = 'SELECT * FROM schema_evolution WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a schema evolution entry by ID
    async updateSchemaEvolution(id, data) {
        const sql = `
            UPDATE schema_evolution SET
                target_code = ?, target_on = ?, target = ?, actual = ?, incentive_rate = ?, incentive_amount = ?
            WHERE id = ?
        `;
        const values = [
            data.target_code, data.target_on, data.target, data.actual, data.incentive_rate, data.incentive_amount, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a schema evolution entry by ID
    async deleteSchemaEvolution(id) {
        const sql = 'DELETE FROM schema_evolution WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new SchemaEvolution();
