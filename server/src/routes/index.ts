import { Router, Request, Response } from "express";

import { UsersRouter } from "./users";
import { BlogRouter } from "./blog";
import { DevicesRouter } from "./devices";
import { ProductRouter } from "./products";

export class ApiRouter {

    public router: Router;

    private usersRouter: UsersRouter = new UsersRouter();
    private devicesRouter: DevicesRouter = new DevicesRouter();
    private blogRouter: BlogRouter = new BlogRouter();
    private productRouter: ProductRouter = new ProductRouter();

    constructor() {
        this.router = Router();
        this.mapRoutes();
    }

    private mapRoutes(): void {

        this.router.get('/v', (req: Request, res: Response) => {
            return res.status(200).send({
                message: "v1.0.0"
            });
        });

        this.router.get('/hola', (req: Request, res: Response) => {
            return res.status(200).send({
                message: "Hola Mundo!"
            });
        });

        this.router.use('/usuarios', this.usersRouter.router);
        this.router.use('/dispositivos', this.devicesRouter.router);
        this.router.use('/blog', this.blogRouter.router);
        this.router.use('/productos', this.productRouter.router);
    }
}