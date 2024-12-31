const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await User.createUser(data);
        res.status(201).json({ status: 'success', data: { id: result.insertId, ...data, password: undefined } });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.getUsers();
        res.status(200).json({ status: 'success', data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.getUserById(id);
        if (!user) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.status(200).json({ status: 'success', data: user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await User.updateUser(id, data);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.status(200).json({ status: 'success', message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};
// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.deleteUser(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        // Send a success response with a confirmation message
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
};

