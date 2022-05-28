import { model } from "mongoose";
import { IUser } from "../../..";

import UserSchema from "./user";

export const UserModel = model<IUser>("User", UserSchema);