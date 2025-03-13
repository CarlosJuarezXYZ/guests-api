import {config} from 'dotenv';
config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);
console.log("DB_PORT:", process.env.DB_PORT);

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'carlostuna015';
export const DB_DATABASE = process.env.DB_DATABASE || 'marriage';
export const DB_PORT = process.env.DB_PORT || 3306;
