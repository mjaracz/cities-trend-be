// update the import path
import { connectDb } from 'migrations-utils/connect-db';

export const up = async () => {
  const db = await connectDb();
  /*
   * Code your update script here!
   * */
};

export const down = async () => {
  const db = await connectDb();
  /*
   * Code your downgrade script here!
   * */
};
