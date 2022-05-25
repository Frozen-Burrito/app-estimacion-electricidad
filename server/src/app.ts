import express, { Application, Request, Response } from "express";
import path from "path";

import { ApiRouter } from "./routes";
import { connectToMongoDB } from "./utils/connectToMongo";
import morganMiddleware from "./utils/morganMiddleware";
import Log from "./utils/logger";

class App {
    public app: Application = express();

    private apiRouter: ApiRouter = new ApiRouter();
    
    constructor() {
        this.init();
        this.setupDataSource();
    }

    private init(): void {

        if (process.env.NODE_ENV !== "production") {
            require("dotenv").config({ path: './src/.env.development'});
        }

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		this.app.use(morganMiddleware);
		
		this.app.use('/api/v1', this.apiRouter.router);

        if (process.env.NODE_ENV !== "production") {
            this.app.use(express.static("client/build"));

            this.app.get("*", (req: Request, res: Response): void => {
                res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
            });
        }
    }

    private async setupDataSource(): Promise<void> {
        try {
            const mongoUri = process.env.MONGO_URI || "";

            const connClient = await connectToMongoDB(mongoUri);

            Log.info(`Servidor conectado a MongoDB Atlas, host: ${connClient.connection.host}`)

        } catch (error: any) {
            Log.error(`Error configurando MongoDB Atlas: ${error.message}`);
        }
    }

    public listen(port: string | number, successMsg: string): void {
        this.app.listen(port, () => Log.info(successMsg));
    }
}

export default App; 