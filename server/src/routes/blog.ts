import { Router } from "express";

import { getAllBlogPosts, getPostById, publishBlogPost } from "../controllers/blog_controller";

export class BlogRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.mapRoutes();
    }

    private mapRoutes(): void {
        this.router.route("/")
            .get(getAllBlogPosts)
            .post(publishBlogPost);

        this.router.route("/:id")
            .get(getPostById);
    }
}