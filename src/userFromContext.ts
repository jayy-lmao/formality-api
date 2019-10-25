import { getUserFromReq, IGetUserAuthInfoRequest } from "./userFromReq";
export const getUserFromContext = () => {
  return ({req} : { req: IGetUserAuthInfoRequest}) => {
    const user = getUserFromReq(req);
    const context = {
      req,
      user
    };
    return context;
  };
}
