import { Router, Request, Response } from "express";

import { signUpUser, getUserByUID } from "../controllers/users_controller";

export class UsersRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.mapRoutes();
    }

    private mapRoutes(): void {
        this.router.route("/sign-up").post(signUpUser);
        this.router.route("/:id").get(getUserByUID);
    }
}