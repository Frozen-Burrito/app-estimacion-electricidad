import { model, Document } from "mongoose";
import { IUser, IBlogPost } from "../../..";

import UserSchema from "./user";
import BlogPostSchema from "./blog";

export const UserModel = model<IUser & Document>("User", UserSchema);
export const BlogPostModel = model<IBlogPost & Document>("blog-post", BlogPostSchema);