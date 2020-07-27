import * as request from "supertest";
import app from "../../src/app";
import connection from "../../src/database/index";
import { CallPriceDB } from "../../src/components/call_price/model";

describe("CallPrice", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a new Call Price", async () => {
    let callPrice: CallPriceDB = {
      id: 1,
      origin: "011",
      destination: "022",
      cents_per_minute: 20,
    };
    const response = await request(app).post("/call_prices").send(callPrice);

    expect(response.body).toHaveProperty("id");
    expect(response.body.cents_per_minute).toEqual(20);
  });

  it("Should be able to update a Call Price", async () => {
    let callPrice: CallPriceDB = {
      id: 1,
      origin: "011",
      destination: "022",
      cents_per_minute: 200,
    };
    const response = await request(app).put("/call_prices").send(callPrice);
    expect(response.body).toHaveProperty("id");
    expect(response.body.cents_per_minute).toEqual(200);
  });

  it("Should be able to select a Call Price", async () => {
    const response = await request(app).get("/call_prices/" + 1);

    expect(response.body).toHaveProperty("id");
    expect(response.body.cents_per_minute).toEqual(200);
  });

  it("Should be able to remove a Call Price", async () => {
    const response = await request(app).delete("/call_prices/" + 1);

    expect(response.status).toEqual(204);
  });

  it("Should be able to get all Call Price", async () => {
    let callPrice: CallPriceDB = {
      id: 1,
      origin: "011",
      destination: "022",
      cents_per_minute: 20,
    };
    await request(app).post("/call_prices").send(callPrice);

    const response = await request(app).get("/call_prices");

    expect(response.body).toHaveLength(1);
  });
});
