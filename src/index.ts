import { resolve } from "path"
import { connectDB } from '../config/db';
import { app } from './app';
import { kafka } from '@uomlms/common';
import { SendMailConsumer } from "./kafka/consumers/send-mail-consumer";

const startConsumers = async () => {
  await kafka.connectConsumer(process.env.KAFKA_URL!, process.env.KAFKA_GROUP_ID!);
  new SendMailConsumer(kafka.consumer).subscribe();
}

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined');
  }
  if (!process.env.AUTH_EMAIL) {
    throw new Error('AUTH_EMAIL must be defined');
  }
  if (!process.env.AUTH_PASSWORD) {
    throw new Error('AUTH_PASSWORD must be defined');
  }
  if (!process.env.AUTH_SERVICE) {
    throw new Error('AUTH_SERVICE must be defined');
  }
  if (!process.env.NO_REPLY_EMAIL) {
    throw new Error('NO_REPLY_EMAIL must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  if (!process.env.KAFKA_URL) {
    throw new Error('KAFKA_URL must be defined');
  }
  if (!process.env.KAFKA_GROUP_ID) {
    throw new Error('KAFKA_GROUP_ID must be defined');
  }

  try {

    await kafka.connectProducer(
      process.env.KAFKA_URL,
    );

    process.on('SIGINT', () => kafka.producer.disconnect());
    process.on('SIGTERM', () => kafka.producer.disconnect());

    await startConsumers();
    await connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();
