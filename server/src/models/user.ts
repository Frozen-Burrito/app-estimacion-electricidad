import { Schema } from "mongoose";

const UserSchema = new Schema({
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