import { Router, Request, Response } from "express";
import { CallPriceDB } from "./model";
import {
  getCallPricesController,
  getCallPriceController,
  addCallPriceController,
  updateCallPriceController,
  removeCallPriceController,
} from "./controller";
import { IUserRequest } from "../../router";

const router = Router();

export default (app: Router) => {
  app.use("/call_prices", router);

  router.get("/", (req, res) => {
    getCallPricesController(req as Request, res as Response<CallPriceDB[]>);
  });
  router.get("/:id", (req, res) => {
    getCallPriceController(
      req as Request,
      res as Response<CallPriceDB | undefined>
    );
  });
  router.post("/", (req, res) => {
    addCallPriceController(
      req as IUserRequest<CallPriceDB>,
      res as Response<CallPriceDB | undefined>
    );
  });
  router.put("/", (req, res) => {
    updateCallPriceController(
      req as IUserRequest<CallPriceDB>,
      res as Response<CallPriceDB | undefined>
    );
  });
  router.delete("/:id", (req, res) => {
    removeCallPriceController(
      req as IUserRequest<undefined>,
      res as Response<undefined>
    );
  });
};
