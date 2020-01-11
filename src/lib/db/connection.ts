import * as mongoose from 'mongoose';

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

console.log(url);
export const configureDB = async () => {
  try {
    await mongoose.connect(url, options);
    console.log('MongoDB is connected');
  } catch (err) {
    console.log(err);
    throw err;
  }
};
