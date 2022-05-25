import { Router, Request, Response } from "express";

export class UsersRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.mapRoutes();
    }

    private mapRoutes(): void {
        this.router.route('/').get(async (req: Request, res: Response): Promise<Response> => {
            return res.status(200).send({
                recurso: 'Usuarios',
            });
        });
    }
}