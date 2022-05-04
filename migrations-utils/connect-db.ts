import { MongoClient } from 'mongodb';

export const connectDb = async () => {
  const client: MongoClient = await MongoClient.connect(
    'mongodb://localhost:27017/db',
    { useUnifiedTopology: true },
  );
  return client.db();
};
