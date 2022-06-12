import { Request, Response } from "express";

import { ProductModel } from "../models";

export const getAllProducts = async (req: Request, res: Response) => {
    try {        
        const products = await ProductModel.find();

        return res.status(200).json({
            data: products
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const product = await ProductModel.findById(id);

        console.log(id, product);
        
        if (product) {
            return res.status(200).json({
                data: product,
            });
        } else {
            return res.status(404).json({
                error: "No hay un producto con ese id."
            });
        }
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}

export const addNewProduct = async (req: Request, res: Response) => {
    try {
        const { name, imageUrl, description, features, price, discountPercent } = req.body;

	    const creationTime: string = new Date().toISOString();

        const newProduct = await ProductModel.create({ 
            name,
            creationTime,
            imageUrl,
            description,
            features,
            discountPercent,
            price
        });

        return res.status(201).json({
            postId: newProduct._id,
            location: `${req.route}/${newProduct._id}`,
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            error: error
        });
    }
}
