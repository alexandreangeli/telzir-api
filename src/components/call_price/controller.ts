import { Response } from "express";
import { CallPriceDB } from "./model";
import {
  getCallPrices,
  getCallPriceByID,
  addCallPrice,
  updateCallPrice,
  removeCallPrice,
} from "./services";
import { IUserRequest } from "../../router";

export async function getCallPricesController(
  req: IUserRequest<undefined>,
  res: Response<CallPriceDB[]>
) {
  try {
    return res.status(200).json(await getCallPrices());
  } catch (err) {
    return res.status(400).send(err.message);
  }
}

export async function getCallPriceController(
  req: IUserRequest<undefined>,
  res: Response<CallPriceDB | undefined>
) {
  try {
    return res
      .status(200)
      .json(await getCallPriceByID(parseInt(req.params.id)));
  } catch (err) {
    return res.status(400).send(err.message);
  }
}

export async function addCallPriceController(
  req: IUserRequest<CallPriceDB>,
  res: Response<CallPriceDB>
) {
  try {
    return res.status(201).json(await addCallPrice(req.body));
  } catch (err) {
    return res.status(400).send(err.message);
  }
}

export async function updateCallPriceController(
  req: IUserRequest<CallPriceDB>,
  res: Response<CallPriceDB>
) {
  try {
    return res.status(201).json(await updateCallPrice(req.body));
  } catch (err) {
    return res.status(400).send(err.message);
  }
}

export async function removeCallPriceController(
  req: IUserRequest<undefined>,
  res: Response<undefined>
) {
  try {
    await removeCallPrice(parseInt(req.params.id));
    return res.status(204).send();
  } catch (err) {
    return res.status(400).send(err.message);
  }
}
