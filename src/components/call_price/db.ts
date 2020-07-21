import dbUtils from "../../utils/dbUtils";
import { CallPriceDB } from "./model";

export async function getCallPricesDB() {
  try {
    const query = `
      select *
      from call_price
    `;
    const callPrices = await dbUtils.returnRows<CallPriceDB>(
      CallPriceDB,
      query
    );
    return callPrices;
  } catch (err) {
    console.log(err);
    throw Error("Error getting call prices");
  }
}

export async function getCallPriceByIDDB(id: number) {
  try {
    const query = `
      select *
      from call_price
      where id = ?
    `;
    const parameters = [id];
    const callPrice = await dbUtils.returnRow<CallPriceDB>(
      CallPriceDB,
      query,
      parameters
    );
    return callPrice;
  } catch (err) {
    console.log(err);
    throw Error("Error getting call price");
  }
}

export async function addCallPriceDB(callPrice: CallPriceDB) {
  try {
    const query = `
      insert into call_price
      (origin, destination, cents_per_minute)
      values(?, ?, ?)
      returning *
    `;
    const parameters = [
      callPrice.origin,
      callPrice.destination,
      callPrice.cents_per_minute,
    ];
    const callPriceRes = await dbUtils.returnRow<CallPriceDB>(
      CallPriceDB,
      query,
      parameters
    );
    return callPriceRes;
  } catch (err) {
    console.log(err);
    throw Error("Error adding call price");
  }
}

export async function updateCallPriceDB(callPriceReq: CallPriceDB) {
  try {
    const query = `
      update 
        call_price
      set 
        origin = ?,
        destination = ?,
        cents_per_minute = ?
      where 
        id = ?
      returning *
    `;
    const parameters = [
      callPriceReq.origin,
      callPriceReq.destination,
      callPriceReq.cents_per_minute,
      callPriceReq.id,
    ];
    const callPriceRes = await dbUtils.returnRow<CallPriceDB>(
      CallPriceDB,
      query,
      parameters
    );
    return callPriceRes;
  } catch (err) {
    console.log(err);
    throw Error("Error updating call price");
  }
}

export async function removeCallPriceDB(id: number) {
  try {
    const query = `
      delete from call_price
      where id = ?
    `;
    const parameters = [id];

    await dbUtils.returnNothing<CallPriceDB>(CallPriceDB, query, parameters);
  } catch (err) {
    console.log(err);
    throw Error("Error removing call price");
  }
}
