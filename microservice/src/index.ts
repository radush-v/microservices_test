import { consumeRabbitMq } from './consumer/consumer';
import express from 'express';

const consumer = express();

consumer.listen(process.env.CONSUMER_PORT, () => {
    console.log('Consumer is running...');
    consumeRabbitMq();
})
