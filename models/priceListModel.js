const db = require('../config/database');

class PriceList {
    // Create a new price list
    async createPriceList(data) {
        const sql = `
            INSERT INTO price_lists (
                description, price_category, effective_from, sno, item_code, barcode, item_name,
                item_type, rate, dealer_rate, wholesale_rate, mrp, discount
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.description || null, data.price_category || null, data.effective_from || null,
            data.sno , data.item_code || null, data.barcode || null, data.item_name || null,
            data.item_type || null, data.rate || null, data.dealer_rate || null,
            data.wholesale_rate || null, data.mrp || null, data.discount || null
        ];

        try {
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error executing createPriceList query:', error);
            throw error;
        }
    }

    // Get all price lists
    async getPriceLists() {
        const sql = 'SELECT * FROM price_lists';

        try {
            const [rows] = await db.query(sql);
            return rows;
        } catch (error) {
            console.error('Error executing getPriceLists query:', error);
            throw error;
        }
    }

    // Get a price list by ID
    async getPriceListById(id) {
        const sql = 'SELECT * FROM price_lists WHERE id = ?';

        try {
            const [rows] = await db.query(sql, [id]);
            return rows[0];
        } catch (error) {
            console.error('Error executing getPriceListById query:', error);
            throw error;
        }
    }

    // Update a price list by ID
    async updatePriceList(id, data) {
        const sql = `
            UPDATE price_lists SET
                description = ?, price_category = ?, effective_from = ?, sno = ?, item_code = ?,
                barcode = ?, item_name = ?, item_type = ?, rate = ?, dealer_rate = ?,
                wholesale_rate = ?, mrp = ?, discount = ?
            WHERE id = ?
        `;
        const values = [
            data.description || null, data.price_category || null, data.effective_from || null,
            data.sno || null, data.item_code || null, data.barcode || null, data.item_name || null,
            data.item_type || null, data.rate || null, data.dealer_rate || null,
            data.wholesale_rate || null, data.mrp || null, data.discount || null, id
        ];

        try {
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error executing updatePriceList query:', error);
            throw error;
        }
    }

    // Delete a price list by ID
    async deletePriceList(id) {
        const sql = 'DELETE FROM price_lists WHERE id = ?';

        try {
            const [result] = await db.execute(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error executing deletePriceList query:', error);
            throw error;
        }
    }
}

module.exports = new PriceList();
