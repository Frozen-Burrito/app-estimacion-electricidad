import { Schema } from "mongoose";

const BlogPostSchema = new Schema({

    title: {
        type: String,
    },

    creationTime: {
        type: String,
    },

    lastUpdated: {
        type: String,
    },

    author: {
        ref: "User",
        type: Schema.Types.ObjectId,
    },

    imageUrl: {
        type: String,
    },

    shortDescription: {
        type: String,
    },

    mdContent: {
        type: String,
    },
});

export default BlogPostSchema;