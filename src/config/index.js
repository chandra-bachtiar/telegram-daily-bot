import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

export default {
    TELEGRAM_TOKEN
};