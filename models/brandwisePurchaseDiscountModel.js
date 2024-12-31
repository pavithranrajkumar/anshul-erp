const db = require('../config/database');

class BrandwisePurchaseDiscount {
    // Create a new brandwise purchase discount
    async createBrandwisePurchaseDiscount(data) {
        const sql = `
            INSERT INTO brandwise_purchase_discounts (
                description, date, sno, brand_code, brand_name, retailer_discount, wholesaler_discount, dealer_discount
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description, data.date, data.sno, data.brand_code, data.brand_name,
            data.retailer_discount, data.wholesaler_discount, data.dealer_discount
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Get all brandwise purchase discounts
    async getBrandwisePurchaseDiscounts() {
        const sql = 'SELECT * FROM brandwise_purchase_discounts';
        const [rows] = await db.query(sql);
        return rows;
    }

    // Get a brandwise purchase discount by ID
    async getBrandwisePurchaseDiscountById(id) {
        const sql = 'SELECT * FROM brandwise_purchase_discounts WHERE id = ?';
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    // Update a brandwise purchase discount by ID
    async updateBrandwisePurchaseDiscount(id, data) {
        const sql = `
            UPDATE brandwise_purchase_discounts SET
                description = ?, date = ?, sno = ?, brand_code = ?, brand_name = ?, retailer_discount = ?,
                wholesaler_discount = ?, dealer_discount = ?
            WHERE id = ?
        `;
        const values = [
            data.description, data.date, data.sno, data.brand_code, data.brand_name,
            data.retailer_discount, data.wholesaler_discount, data.dealer_discount, id
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    // Delete a brandwise purchase discount by ID
    async deleteBrandwisePurchaseDiscount(id) {
        const sql = 'DELETE FROM brandwise_purchase_discounts WHERE id = ?';
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new BrandwisePurchaseDiscount();
