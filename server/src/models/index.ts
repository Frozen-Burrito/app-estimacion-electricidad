import { model, Document } from "mongoose";
import { IUser, IBlogPost, IProduct } from "../../..";

import UserSchema from "./user";
import BlogPostSchema from "./blog";
import ProductSchema from "./product";

export const UserModel = model<IUser & Document>("User", UserSchema);
export const BlogPostModel = model<IBlogPost & Document>("blog-post", BlogPostSchema);
export const ProductModel = model<IProduct & Document>("product", ProductSchema);