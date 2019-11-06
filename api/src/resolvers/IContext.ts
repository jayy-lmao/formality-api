import User from "../schemas/User";
export interface IContext {
  req: Request;
  user: User;
}
