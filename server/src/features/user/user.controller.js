import { createUser, getAllUser, updateUser, deleteUser as removeUser } from './user.repository.js';

//Create/Add the User
const create = async (req, res) => {
    const body = req.body;
    console.log(body);

    if (!body.name || !body.email || !body.phoneNumber || !body.userTypes, !body.address) {
        return res.json({ success: false, msg: "please fill all fields..", data: null });
    }

    try {
        const response = await createUser(body);
        return res.json(response);
    } catch (error) {
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }

}


//Get all user from DB
const allUser = async (req, res) => {
    try {
        const users = await getAllUser();
        if (users) {
            return res.json({ success: true, msg: "All user loaded successfully", data: { users } });
        } else {
            return res.json({ success: false, msg: "User Not found", data: null });
        }
    } catch (error) {
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }
}

const update = async (req, res) => {
    try {

    } catch (error) {
        return res.json(500, { success: false, msg: "Internal Server Error", data: null });
    }
}

const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        return res.json(500, { success: false, msg: "Internal Server Error", data: null });
    }
}

export default { create, allUser, update, deleteUser };