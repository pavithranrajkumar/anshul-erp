const db = require('../config/database');

class CouponMaster {
    async createCoupon(data) {
        const sql = `
            INSERT INTO coupon_master (code, valid_up_to, calculation, value, max_amount, use_type)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.code, data.valid_up_to, data.calculation, data.value, data.max_amount, data.use_type,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async getAllCoupons() {
        const sql = `SELECT * FROM coupon_master`;
        const [rows] = await db.query(sql);
        return rows;
    }

    async getCouponById(id) {
        const sql = `SELECT * FROM coupon_master WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows[0];
    }

    async updateCoupon(id, data) {
        const sql = `
            UPDATE coupon_master
            SET code = ?, valid_up_to = ?, calculation = ?, value = ?, max_amount = ?, use_type = ?
            WHERE id = ?
        `;
        const values = [
            data.code, data.valid_up_to, data.calculation, data.value, data.max_amount, data.use_type, id,
        ];
        const [result] = await db.execute(sql, values);
        return result;
    }

    async deleteCoupon(id) {
        const sql = `DELETE FROM coupon_master WHERE id = ?`;
        const [result] = await db.execute(sql, [id]);
        return result;
    }
}

module.exports = new CouponMaster();
