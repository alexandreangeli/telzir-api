import callPrice from "./components/call_price/routes";
import { Router, Request } from "express";

export interface IUserRequest<T> extends Request {
  body: T;
}

const app = Router();

callPrice(app);

export default app;
