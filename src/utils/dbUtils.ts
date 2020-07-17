import connection from "../database/index";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export default {
  async returnRow<T>(
    cls: ClassType<T>,
    query: string,
    parameters: any[] = []
  ): Promise<T | undefined> {
    const queryResponse = await connection.raw(query, parameters);
    return !queryResponse.rows || !queryResponse.rows.length
      ? undefined
      : plainToClass<T, unknown>(cls, queryResponse.rows[0], {
          excludeExtraneousValues: true,
        });
  },

  async returnRows<T>(
    cls: ClassType<T>,
    query: string,
    parameters: any[] = []
  ): Promise<T[]> {
    const queryResponse = await connection.raw(query, parameters);

    let selectResponse: Array<T> = [];

    if (queryResponse.rows) {
      queryResponse.rows.forEach((element: any) => {
        selectResponse.push(
          plainToClass<T, unknown>(cls, element, {
            excludeExtraneousValues: true,
          })
        );
      });
    }

    return selectResponse;
  },

  async returnNothing<T>(
    cls: ClassType<T>,
    query: string,
    parameters: any[] = []
  ) {
    await connection.raw(query, parameters);
  },
};
