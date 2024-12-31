const db = require('../config/database');

class SalesSetup {
    // Create a new sales setup entry
    async createSalesSetup(data) {
        const sql = `
            INSERT INTO sales_setup (
                customerLabel, logisticDetails, creditControl, documentClassification, 
                salesmanWiseBilling, agentWiseBilling
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.customerLabel,
            data.logisticDetails || false,
            data.creditControl || false,
            data.documentClassification || false,
            data.salesmanWiseBilling || 'notRequired',
            data.agentWiseBilling || false
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all sales setups
    async getSalesSetups() {
        const sql = `SELECT * FROM sales_setup`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get sales setup by ID
    async getSalesSetupById(id) {
        const sql = `SELECT * FROM sales_setup WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update sales setup
    async updateSalesSetup(id, data) {
        const sql = `
            UPDATE sales_setup SET
                customerLabel = ?, logisticDetails = ?, creditControl = ?, documentClassification = ?, 
                salesmanWiseBilling = ?, agentWiseBilling = ?
            WHERE id = ?
        `;
        const values = [
            data.customerLabel,
            data.logisticDetails || false,
            data.creditControl || false,
            data.documentClassification || false,
            data.salesmanWiseBilling || 'notRequired',
            data.agentWiseBilling || false,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete sales setup
    async deleteSalesSetup(id) {
        const sql = `DELETE FROM sales_setup WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new SalesSetup();
