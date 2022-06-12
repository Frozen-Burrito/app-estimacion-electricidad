import { Router } from "express";

import { getAllProducts, getProductById, addNewProduct } from "../controllers/product_controller";

export class ProductRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.mapRoutes();
    }

    private mapRoutes(): void {
        this.router.route("/")
            .get(getAllProducts)
            .post(addNewProduct);

        this.router.route("/:id")
            .get(getProductById);
    }
}