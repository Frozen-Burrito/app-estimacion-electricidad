import { Request, Response } from "express";

import { BlogPostModel } from "../models";

export const getAllBlogPosts = async (req: Request, res: Response) => {
    try {        
        const blogPosts = await BlogPostModel.find().populate("author", "email _id");

        return res.status(200).json({
            data: blogPosts
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const blogPost = await BlogPostModel.findById(id);

        console.log(id, blogPost);
        
        if (blogPost) {
            return res.status(200).json({
                data: blogPost,
            });
        } else {
            return res.status(404).json({
                error: "No hay un post con ese id."
            });
        }
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}

export const publishBlogPost = async (req: Request, res: Response) => {
    try {
        const { title, author, imageUrl, shortDescription, mdContent } = req.body;

	    const creationTime: string = new Date().toISOString();

        const newBlogPost = await BlogPostModel.create({ 
            title,
            creationTime,
            author,
            imageUrl,
            shortDescription,
            mdContent
        });

        return res.status(201).json({
            postId: newBlogPost._id,
            location: `${req.route}/${newBlogPost._id}`,
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}
