const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const models = {
  User: require('./models/User'),
}

module.exports = {
  connect,
  disconnect,
  ...models
}