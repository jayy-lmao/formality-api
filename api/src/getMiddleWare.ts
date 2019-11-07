import connectRedis from "connect-redis";
import cookieParser from "cookie-parser";
import express from "express";
import jwt from "express-jwt";
import session from "express-session";
import morgan from "morgan";
import { redis } from './redis';

export const getMiddleWare = (path: string) => {
    const app = express();
    const RedisStore = connectRedis(session);
    // app.use(
    //     path,
    //     jwt({
    //         credentialsRequired: false,
    //         secret: process.env.JWT_SECRET || "something_is_better_than_nothing",
    //     })
    // );
    // initialize cookie-parser to allow us access the cookies stored in the browser.
    // app.use(cookieParser());
    
    app.use(
        session({
            cookie: {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24, // 1 day
                secure: process.env.NODE_ENV === 'production',
            },
            name:"qid",
            resave: false,
            saveUninitialized: false,
            secret: "needanewsecret",
            store: new RedisStore({
                client: redis as any,
            }),
        })
    )

    // initialize express-session to allow us track the logged-in user across sessions.
    app.use(
        /*
     * For different types of logging see https://github.com/expressjs/morgan
     * Custom logging which include queries in future releases.
     */
        morgan("dev")
    );
    return app;
};
