const db = require('../config/database');

class BrandPartyPurchaseDiscount {
    // Create a new brand party purchase discount
    async createBrandPartyPurchaseDiscount(data) {
        const sql = `
            INSERT INTO brand_party_purchase_discounts (
                description, date, sno, party_code, party_name, brand_code, brand_name
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description, data.date, data.sno, data.party_code, data.party_name,
            data.brand_code, data.brand_name
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all brand party purchase discounts
    async getBrandPartyPurchaseDiscounts() {
        const sql = 'SELECT * FROM brand_party_purchase_discounts';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get brand party purchase discount by ID
    async getBrandPartyPurchaseDiscountById(id) {
        const sql = 'SELECT * FROM brand_party_purchase_discounts WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update brand party purchase discount by ID
    async updateBrandPartyPurchaseDiscount(id, data) {
        const sql = `
            UPDATE brand_party_purchase_discounts SET
                description = ?, date = ?, sno = ?, party_code = ?, party_name = ?, 
                brand_code = ?, brand_name = ? 
            WHERE id = ?
        `;
        const values = [
            data.description, data.date, data.sno, data.party_code, data.party_name,
            data.brand_code, data.brand_name, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete brand party purchase discount by ID
    async deleteBrandPartyPurchaseDiscount(id) {
        const sql = 'DELETE FROM brand_party_purchase_discounts WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new BrandPartyPurchaseDiscount();
