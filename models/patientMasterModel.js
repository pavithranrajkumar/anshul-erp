const db = require('../config/database');

class PatientMaster {
    async createPatient(data) {
        const sql = `
            INSERT INTO patient_master 
            (name, phone, email, gender, dob, loyalty_card, card_no, status, anniversary, spouse_name, 
            gst_no, territory, address, country, state, city, pin_code, longitude, latitude) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.name, data.phone, data.email, data.gender, data.dob, data.loyalty_card,
            data.card_no, data.status, data.anniversary, data.spouse_name, data.gst_no,
            data.territory, data.address, data.country, data.state, data.city, data.pin_code,
            data.longitude, data.latitude
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllPatients() {
        const sql = `SELECT * FROM patient_master`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getPatientById(id) {
        const sql = `SELECT * FROM patient_master WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updatePatient(id, data) {
        const sql = `
            UPDATE patient_master 
            SET name = ?, phone = ?, email = ?, gender = ?, dob = ?, loyalty_card = ?, 
                card_no = ?, status = ?, anniversary = ?, spouse_name = ?, gst_no = ?, 
                territory = ?, address = ?, country = ?, state = ?, city = ?, pin_code = ?, 
                longitude = ?, latitude = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        `;
        const values = [
            data.name, data.phone, data.email, data.gender, data.dob, data.loyalty_card,
            data.card_no, data.status, data.anniversary, data.spouse_name, data.gst_no,
            data.territory, data.address, data.country, data.state, data.city, data.pin_code,
            data.longitude, data.latitude, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deletePatient(id) {
        const sql = `DELETE FROM patient_master WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result; // Ensure this returns the query result
    }
}

module.exports = new PatientMaster();
