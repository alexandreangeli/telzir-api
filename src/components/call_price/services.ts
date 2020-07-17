import {
  getCallPricesDB,
  getCallPriceByIDDB,
  addCallPriceDB,
  updateCallPriceDB,
  removeCallPriceDB,
} from "./db";
import { CallPriceDB } from "./model";

export async function getCallPrices() {
  return await getCallPricesDB();
}

export async function getCallPriceByID(id: number) {
  return await getCallPriceByIDDB(id);
}

export async function addCallPrice(callPrice: CallPriceDB) {
  return await addCallPriceDB(callPrice);
}

export async function updateCallPrice(callPrice: CallPriceDB) {
  let updatedCallPrice = await updateCallPriceDB(callPrice);
  if (updatedCallPrice == undefined) {
    throw Error("Call price not found");
  }
  return updatedCallPrice;
}

export async function removeCallPrice(id: number) {
  let callPrice = await getCallPriceByID(id);
  if (!callPrice) throw Error("Call price not found");
  await removeCallPriceDB(id);
}
