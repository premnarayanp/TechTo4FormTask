import {
    createUser,
    getAllUser,
    updateUser,
    deleteUser as removeUser,
} from './user.repository.js';

// Create User
const create = async (req, res) => {
    try {
        const body = req.body;
        const host = "http://localhost:8363/";
        if (!body.name || !body.email || !body.phoneNumber || !body.address || !body.userTypes) {
            return res.status(400).json({ success: false, msg: 'Please fill all required fields.', data: null });
        }
        if (req.files) {
            body.avatarImg = req.files.avatarImg ? host + req.files.avatarImg[0].path : null;
            body.aadharImg = req.files.aadharImg ? host + req.files.aadharImg[0].path : null;
            body.panCardImg = req.files.panCardImg ? host + req.files.panCardImg[0].path : null;
        }

        const response = await createUser(body);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Internal Server Error', data: null });
    }
};

// Get all Users
const allUser = async (req, res) => {
    try {
        const users = await getAllUser();
        if (users.length > 0) {
            return res.status(200).json({ success: true, msg: 'All users loaded successfully', data: users });
        } else {
            return res.status(404).json({ success: false, msg: 'No users found', data: null });
        }
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Internal Server Error', data: null });
    }
};

// Update User
const update = async (req, res) => {
    try {
        const userId = req.params.id;
        const body = req.body;

        if (req.files) {
            body.avatarImg = req.files.avatarImg ? req.files.avatarImg[0].path : null;
            body.aadharImg = req.files.aadharImg ? req.files.aadharImg[0].path : null;
            body.panCardImg = req.files.panCardImg ? req.files.panCardImg[0].path : null;
        }

        const updatedUser = await updateUser(userId, body);
        return res.status(200).json({ success: true, msg: 'User updated successfully', data: updatedUser });
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Internal Server Error', data: null });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await removeUser(userId);
        //console.log("deleted user---------------------", req.params.id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Internal Server Error', data: null });
    }
};

export default { create, allUser, update, deleteUser };
