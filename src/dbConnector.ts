import mongoose from "mongoose";
import { logger } from "./winston";

export const databaseConnector = async () => {
    const dbUrl: string = process.env.NODE_ENV === 'dev' ? process.env.DEV_DB_URL || '' : process.env.DB_URL || ''
    try {
        const tee = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }, (error) => {
            if (error) {
                logger.error('❌ Local DB Connect error :   ', error);
            } else {
                logger.info(`✅${mongoose.connection.name} DB CONNECTED`);
            }
        });
    } catch (error) {
        logger.error('Local DB Connect error : ', error);
    }

}
