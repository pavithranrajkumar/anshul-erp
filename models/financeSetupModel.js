const db = require('../config/database');

class FinanceSetup {
    // Create a new finance setup entry
    async createFinanceSetup(data) {
        const sql = `
            INSERT INTO finance_setup (
                expenseBudgetControl, tdsApplicable, documentClassification, allowNegativeCash, 
                transactionOnBehalf, bankReconciliation, manageBillwiseOutstanding, zoomLevel, attributes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.expenseBudgetControl,
            data.tdsApplicable || false,
            data.documentClassification || false,
            data.allowNegativeCash || false,
            data.transactionOnBehalf || false,
            data.bankReconciliation,
            data.manageBillwiseOutstanding,
            data.zoomLevel,
            JSON.stringify(data.attributes) || null
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all finance setups
    async getFinanceSetups() {
        const sql = `SELECT * FROM finance_setup`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get finance setup by ID
    async getFinanceSetupById(id) {
        const sql = `SELECT * FROM finance_setup WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update finance setup
    async updateFinanceSetup(id, data) {
        const sql = `
            UPDATE finance_setup SET
                expenseBudgetControl = ?, tdsApplicable = ?, documentClassification = ?, allowNegativeCash = ?, 
                transactionOnBehalf = ?, bankReconciliation = ?, manageBillwiseOutstanding = ?, zoomLevel = ?, 
                attributes = ?
            WHERE id = ?
        `;
        const values = [
            data.expenseBudgetControl,
            data.tdsApplicable || false,
            data.documentClassification || false,
            data.allowNegativeCash || false,
            data.transactionOnBehalf || false,
            data.bankReconciliation,
            data.manageBillwiseOutstanding,
            data.zoomLevel,
            JSON.stringify(data.attributes) || null,
            id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete finance setup
    async deleteFinanceSetup(id) {
        const sql = `DELETE FROM finance_setup WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new FinanceSetup();
