import mongoose, { ConnectOptions } from 'mongoose';

export async function connectToMongoDB(uri: string): Promise<typeof mongoose> {

    const options: ConnectOptions = {
        autoIndex: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
    };

    const dbConnection = await mongoose.connect(uri, options);
    
    return dbConnection;
}