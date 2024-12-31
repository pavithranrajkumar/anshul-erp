const db = require('../config/database');

class CompanySetup {
    // Insert a new company setup
    async createCompany(data) {
        const sql = `
            INSERT INTO company_setup 
            (name, code, address, country, state, city, pincode, phone, email, website, pan_no, tan, cin, gstin, establishment_code, esino, pfno, authorized_person, iec_code, gstn_username, gstn_password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.name, data.code, data.address, data.country, data.state, data.city, data.pincode,
            data.phone, data.email, data.website, data.pan_no, data.tan, data.cin, data.gstin,
            data.establishment_code, data.esino, data.pfno, data.authorized_person, data.iec_code,
            data.gstn_username, data.gstn_password
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Fetch all company setups
    async getAllCompanies() {
        const sql = `SELECT * FROM company_setup`;
        const [rows] = await db.query(sql);
        return rows;
    }

    // Fetch a specific company setup by ID
    async getCompanyById(id) {
        const sql = `SELECT * FROM company_setup WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a company setup
    async updateCompany(id, data) {
        const sql = `
            UPDATE company_setup
            SET name = ?, code = ?, address = ?, country = ?, state = ?, city = ?, pincode = ?, 
                phone = ?, email = ?, website = ?, pan_no = ?, tan = ?, cin = ?, gstin = ?, 
                establishment_code = ?, esino = ?, pfno = ?, authorized_person = ?, iec_code = ?, 
                gstn_username = ?, gstn_password = ?
            WHERE id = ?
        `;
        const values = [
            data.name, data.code, data.address, data.country, data.state, data.city, data.pincode,
            data.phone, data.email, data.website, data.pan_no, data.tan, data.cin, data.gstin,
            data.establishment_code, data.esino, data.pfno, data.authorized_person, data.iec_code,
            data.gstn_username, data.gstn_password, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a company setup
    async deleteCompany(id) {
        const sql = `DELETE FROM company_setup WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new CompanySetup();
