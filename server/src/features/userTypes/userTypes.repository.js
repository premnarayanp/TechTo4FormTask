import UserTypes from './userTypes.schema.js';

//------------register the User--------------
export const createUserType = async (body) => {
    try {
        const userType = await UserTypes.findOne({ type: body.type });
        if (!userType) {
            const userType = await UserTypes.create(body);
            return { success: true, msg: " UserTypes Successfully Added", data: { userType: userType } }
        } else {
            return { success: false, msg: "UserTypes Already Exist", data: null };
        }
    } catch (error) {
        console.log('error in creating userTypes', error);
        return { success: false, msg: "Internal Database Server Error", data: null };
    }
}



//Get all userTypes from DB
export const getAllUserType = async () => {
    try {
        const userType = await UserTypes.find();
        return userType;
    } catch (error) {
        return new Error(error);
    }
}


//Update  userTypes from DB
export const updateUserType = async (userId, body) => {
    try {
        const userType = await UserTypes.findById({ _id: userId });
        if (userType) {
            userType.type = body.type
            userType.save();
            return userType;
        } else {
            return new Error("User Id not match");
        }

    } catch (error) {
        return new Error(error);
    }
}


//Delete  user from DB
export const deleteUserType = async (typeId) => {
    try {
        const userType = await UserTypes.findByIdAndRemove({ _id: typeId });
        //console.log("userType=", userType);
        if (userType) {
            //remove  related user from User 
            await User.deleteMany({ userTypes: typeId });
            //console.log("-----------Deleting-----------------");
            return { success: true, msg: "UserTypes and Related Users Deleted Successfully" };
        } else {
            return { success: false, msg: "UserTypes  not Exist or Wrong Id" };
        }

    } catch (error) {
        return new Error(error);
    }
}


