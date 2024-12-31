const db = require('../config/database');

class PartyPurchaseDiscount {
    // Create a new party purchase discount
    async createPartyPurchaseDiscount(data) {
        const sql = `
            INSERT INTO party_purchase_discounts (
                description, date, sno, party_code, party_name, discount_percentage
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description || null, data.date || null, data.sno || null, 
            data.party_code || null, data.party_name || null, data.discount_percentage || null
        ];

        try {
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error executing createPartyPurchaseDiscount query:', error);
            throw error;
        }
    }

    // Get all party purchase discounts
    async getPartyPurchaseDiscounts() {
        const sql = 'SELECT * FROM party_purchase_discounts';

        try {
            const [rows] = await db.query(sql);
            return rows;
        } catch (error) {
            console.error('Error executing getPartyPurchaseDiscounts query:', error);
            throw error;
        }
    }

    // Get a party purchase discount by ID
    async getPartyPurchaseDiscountById(id) {
        const sql = 'SELECT * FROM party_purchase_discounts WHERE id = ?';

        try {
            const [rows] = await db.query(sql, [id]);
            return rows[0];
        } catch (error) {
            console.error('Error executing getPartyPurchaseDiscountById query:', error);
            throw error;
        }
    }

    // Update a party purchase discount by ID
    async updatePartyPurchaseDiscount(id, data) {
        const sql = `
            UPDATE party_purchase_discounts SET
                description = ?, date = ?, sno = ?, party_code = ?, party_name = ?, discount_percentage = ?
            WHERE id = ?
        `;
        const values = [
            data.description || null, data.date || null, data.sno || null, 
            data.party_code || null, data.party_name || null, data.discount_percentage || null, id
        ];

        try {
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error executing updatePartyPurchaseDiscount query:', error);
            throw error;
        }
    }

    // Delete a party purchase discount by ID
    async deletePartyPurchaseDiscount(id) {
        const sql = 'DELETE FROM party_purchase_discounts WHERE id = ?';

        try {
            const [result] = await db.execute(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error executing deletePartyPurchaseDiscount query:', error);
            throw error;
        }
    }
}

module.exports = new PartyPurchaseDiscount();
