import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';

export const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});