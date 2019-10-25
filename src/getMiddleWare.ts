import express from "express";
import jwt from "express-jwt";
import morgan from 'morgan';
export const getMiddleWare = (path: string) => {
    const app = express();
    app.use(path, jwt({
        credentialsRequired: false,
        secret: process.env.JWT_SECRET || "something_is_better_than_nothing"
    }));
    app.use(
        /*
         * For different types of logging see https://github.com/expressjs/morgan
         * Custom logging which include queries in future releases.
         */
        morgan('dev'));
    return app;
}
