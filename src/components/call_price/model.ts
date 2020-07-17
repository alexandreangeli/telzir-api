import { Expose } from "class-transformer";

export class CallPriceDB {
  @Expose() id!: number;
  @Expose() origin!: string;
  @Expose() destiny!: string;
  @Expose() cents_per_minute!: number;
}
