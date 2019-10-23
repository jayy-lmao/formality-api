import { Request } from "express";
import User from "./schemas/User";
interface IInnerUser {
  user: User;
}
interface IUserOuter {
  data: IInnerUser;
}
export interface IGetUserAuthInfoRequest extends Request {
  user?: IUserOuter; // or any other type
}
export const getUserFromReq = (reqWithUser: IGetUserAuthInfoRequest) => {
  return reqWithUser.user && reqWithUser.user.data.user;
};
