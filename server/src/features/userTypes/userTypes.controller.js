import { createUserType, getAllUserType, updateUserType, deleteUserType as removeUserType } from './userTypes.repository.js';

//Create/Add the UserTypes
const create = async (req, res) => {
    const body = req.body;
    // console.log(body);

    if (!body.type) {
        return res.json({ success: false, msg: "please fill all fields..", data: null });
    }

    try {
        const response = await createUserType(body);
        return res.json(response);
    } catch (error) {
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }

}


//Get all user from DB
const allUserTypes = async (req, res) => {
    try {
        const userTypes = await getAllUserType();
        if (userTypes) {
            return res.json({ success: true, msg: "All userTypes loaded successfully", data: { userTypes } });
        } else {
            return res.json({ success: false, msg: "UserTypes Not found", data: null });
        }
    } catch (error) {
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }
}

const update = async (req, res) => {
    try {
        const userType = await updateUserType(req.params.id, req.body);
        return res.json({ success: true, msg: "userTypes updated successfully", data: { userType } });

    } catch (error) {
        return res.json(500, { success: false, msg: "Internal Server Error", data: null });
    }
}

const deleteUserTypes = async (req, res) => {
    try {
        const response = await removeUserType(req.params.id);
        // return res.json({ success: true, msg: "userTypes deleted successfully", data: { userType } });
        return res.json(response);
    } catch (error) {
        return res.json(500, { success: false, msg: "Internal Server Error", data: null });
    }
}

export default { create, allUserTypes, update, deleteUserTypes };