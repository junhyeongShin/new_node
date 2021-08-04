import winston from 'winston';

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(info => {
    return `${info.level}: ${info.timestamp} | ${info.message} | `;
});

export const logger = winston.createLogger({
    level: 'info',
    format: combine(
        winston.format.colorize(),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
    ],
})

logger.exitOnError = false;

export const loggerInfo = (status: any, requestURL: any, msg?: string | null,) => {
    return logger.info(` [${status} | ${requestURL}]: ${msg}`);
};

export const stream = {
    write: (message: string) => {
        const split = message.split('"');

        return logger.info(`${split[1]} ${split[2]}`);
    },
};