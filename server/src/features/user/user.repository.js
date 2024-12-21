import User from './user.schema.js';

//------------register the User--------------
export const createUser = async (body) => {
    try {
        const user = await User.findOne({ email: body.email });
        if (!user) {
            const user = await User.create(body);
            return { success: true, msg: " User Successfully Added", data: { user: user } }
        } else {
            return { success: false, msg: "User Already Exist", data: null };
        }
    } catch (error) {
        console.log('error in creating user while signing up', error);
        return { success: false, msg: "Internal Database Server Error", data: null };
    }
}


//Get single user from DB
export const getUserById = async (userId) => {
    try {
        const user = await User.find({ _id: userId });
        return user;
    } catch (error) {
        return new Error(error);
    }
}



//Get all user from DB
export const getAllUser = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        return new Error(error);
    }
}



//Update  user from DB
export const updateUser = async (userId, body) => {
    try {
        const user = await User.findById({ _id: userId });
        if (user) {
            user = { ...user, ...body }
            user.save();
            return user;
        } else {
            return new Error("User Id not match");
        }

    } catch (error) {
        return new Error(error);
    }
}


//Delete  user from DB
export const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndRemove({ _id: userId });
        if (user) {
            //remove user from UserTypes array
            let userTypes = await UserTypes.findByIdAndUpdate(user.userTypes, {
                $pull: { users: userId },
            });

            return res.send({ success: true, message: "User Deleted Successfully" });
        } else {
            return new Error("User Id not match");
        }

    } catch (error) {
        return new Error(error);
    }
}


