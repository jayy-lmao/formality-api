import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../schemas/User";

export const getToken = (user: User | undefined, password: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        if (user) {
            await compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log("errord");
                    throw err;
                }
                if (!isMatch) {
                    console.log("no match");
                    reject("");
                } else {
                    const jwToken = jwt.sign(
                        {
                            data: { user },
                        },
                        process.env.JWT_SECRET || "something_is_better_than_nothing",
                        {
                            algorithm: "HS256",
                        }
                    );
                    resolve(jwToken);
                }
            });
        } else {
            reject("");
        }
    });
};
