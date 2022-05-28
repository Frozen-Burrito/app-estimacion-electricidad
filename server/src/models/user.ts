import mongoose, { Schema } from "mongoose";
import { IUser } from "../../..";

const UserSchema = new Schema<IUser>({
    uid: {
        type: String,
        required: [ true, "The user's UID is required"],
        unique: true,
    },

	email: {
        type: String
    },
    
	providerId: {
        type: String,
    },

	creationTime: {
        type: String,
    },
});

export default UserSchema;