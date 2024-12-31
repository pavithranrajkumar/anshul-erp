const db = require('../config/database');  // Database connection

class Vendor {
    // Create a new vendor
    async createVendor(data) {
        const sql = `
            INSERT INTO vendors (
                gst_no, name, print_name, identification, code, contact, gst, registration_date,
                cin, pan, gst_category, gst_suspend, distance, tds_on_gst, address, country, state,
                city, pin_code, phone, email, longitude, latitude, website, facebook, skype, twitter,
                linkedin, payment_term, price_category, agent_broker, transporter, credit_limit, 
                max_credit_days, interest_rate_yearly, lfsc_rtgs_code, account_number, bank_name, branch,
                attachment
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.gst_no, data.name, data.print_name, data.identification, data.code, data.contact,
            data.gst, data.registration_date, data.cin, data.pan, data.gst_category, data.gst_suspend,
            data.distance, data.tds_on_gst, data.address, data.country, data.state, data.city,
            data.pin_code, data.phone, data.email, data.longitude, data.latitude, data.website,
            data.facebook, data.skype, data.twitter, data.linkedin, data.payment_term, data.price_category,
            data.agent_broker, data.transporter, data.credit_limit, data.max_credit_days, data.interest_rate_yearly,
            data.lfsc_rtgs_code, data.account_number, data.bank_name, data.branch, data.attachment
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all vendors
    async getVendors() {
        const sql = 'SELECT * FROM vendors';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get vendor by ID
    async getVendorById(id) {
        const sql = 'SELECT * FROM vendors WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update vendor by ID
    async updateVendor(id, data) {
        const sql = `
            UPDATE vendors SET
                gst_no = ?, name = ?, print_name = ?, identification = ?, code = ?, contact = ?,
                gst = ?, registration_date = ?, cin = ?, pan = ?, gst_category = ?, gst_suspend = ?,
                distance = ?, tds_on_gst = ?, address = ?, country = ?, state = ?, city = ?, pin_code = ?,
                phone = ?, email = ?, longitude = ?, latitude = ?, website = ?, facebook = ?, skype = ?,
                twitter = ?, linkedin = ?, payment_term = ?, price_category = ?, agent_broker = ?, transporter = ?,
                credit_limit = ?, max_credit_days = ?, interest_rate_yearly = ?, lfsc_rtgs_code = ?,
                account_number = ?, bank_name = ?, branch = ?, attachment = ?
            WHERE id = ?
        `;
        const values = [
            data.gst_no, data.name, data.print_name, data.identification, data.code, data.contact,
            data.gst, data.registration_date, data.cin, data.pan, data.gst_category, data.gst_suspend,
            data.distance, data.tds_on_gst, data.address, data.country, data.state, data.city,
            data.pin_code, data.phone, data.email, data.longitude, data.latitude, data.website,
            data.facebook, data.skype, data.twitter, data.linkedin, data.payment_term, data.price_category,
            data.agent_broker, data.transporter, data.credit_limit, data.max_credit_days, data.interest_rate_yearly,
            data.lfsc_rtgs_code, data.account_number, data.bank_name, data.branch, data.attachment, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete vendor by ID
    async deleteVendor(id) {
        const sql = 'DELETE FROM vendors WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new Vendor();
