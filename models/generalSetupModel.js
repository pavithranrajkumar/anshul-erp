const db = require('../config/database');  // Database connection

class GeneralSetup {
    // Create a new general setup
    async createGeneralSetup(data) {
        const sql = `
            INSERT INTO general_setup (
                code, multiCurrency, removeCurrencySymbolInReport, multiLocation,
                bookStartDate, whatsappUrl, whatsappUsername, whatsappPassword,
                senderEmail, senderPassword, displayName, smtpServer,
                smtpMailPort, smtpTimeout, sslRequired
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.code, data.multiCurrency, data.removeCurrencySymbolInReport, data.multiLocation,
            data.bookStartDate, data.whatsappUrl, data.whatsappUsername, data.whatsappPassword,
            data.senderEmail, data.senderPassword, data.displayName, data.smtpServer,
            data.smtpMailPort, data.smtpTimeout, data.sslRequired
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all general setups
    async getGeneralSetups() {
        const sql = 'SELECT * FROM general_setup';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get general setup by ID
    async getGeneralSetupById(id) {
        const sql = 'SELECT * FROM general_setup WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update general setup by ID
    async updateGeneralSetup(id, data) {
        const sql = `
            UPDATE general_setup SET
                code = ?, multiCurrency = ?, removeCurrencySymbolInReport = ?, multiLocation = ?,
                bookStartDate = ?, whatsappUrl = ?, whatsappUsername = ?, whatsappPassword = ?,
                senderEmail = ?, senderPassword = ?, displayName = ?, smtpServer = ?,
                smtpMailPort = ?, smtpTimeout = ?, sslRequired = ?
            WHERE id = ?
        `;
        const values = [
            data.code, data.multiCurrency, data.removeCurrencySymbolInReport, data.multiLocation,
            data.bookStartDate, data.whatsappUrl, data.whatsappUsername, data.whatsappPassword,
            data.senderEmail, data.senderPassword, data.displayName, data.smtpServer,
            data.smtpMailPort, data.smtpTimeout, data.sslRequired, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete general setup by ID
    async deleteGeneralSetup(id) {
        const sql = 'DELETE FROM general_setup WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new GeneralSetup();
