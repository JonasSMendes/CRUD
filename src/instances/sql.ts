import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.SQL_DB as string,
    process.env.SQL_USER as string,
    process.env.SQL_PASSWORD as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.SQL_PORT as string)
    }
);