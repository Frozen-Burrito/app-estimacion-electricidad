import { Schema } from "mongoose";

const BlogPostSchema = new Schema({

    title: {
        type: String,
    },

    creationTime: {
        type: String,
    },

    author: {
        ref: "User",
        type: Schema.Types.ObjectId,
    },

    imageUrl: {
        type: String,
    },

    mdContent: {
        type: String,
    },
});

export default BlogPostSchema;