import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
// import User from "../schemas/User";
import UserInput from "./inputs/UserInput";

export const getToken = (user: UserInput | undefined, password: string): Promise<string> => {
    const errorMessage = { error: "Wrong username or password" }
    return new Promise(async (resolve, reject) => {
        if (user) {
            await compare(password, user.password, (err, isMatch) => {
                if (err) {
                    reject(err);
                }
                if (!isMatch) {
                    reject(errorMessage);
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
            reject(errorMessage);
        }
    });
};
