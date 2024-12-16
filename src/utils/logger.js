import fs from 'fs';
import path from 'path';
import { createLogger, format, transports } from 'winston';

// Path folder logs
const logDir = path.resolve('./logs');

// Cek dan bikin folder kalau belum ada
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
    console.log(`📁 Folder 'logs' berhasil dibuat`);
}

// Konfigurasi logger
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(logDir, 'app.log') }),
    ],
});

export default logger;
