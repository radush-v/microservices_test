import { consumer, consumeRabbitMq } from './consumer/consumer';
import { router } from './producer/routes';
// import { producer } from './producer/producer';

import express from 'express';
import bodyParser from 'body-parser';


consumer.listen(process.env.CONSUMER_PORT, () => {
    consumeRabbitMq();
    console.log('Consumer is running...');
})

const producer =  express();

producer.use(bodyParser.json());
producer.use(bodyParser.urlencoded({extended:true}));
producer.use(router);

producer.listen(process.env.PRODUCER_PORT, () => {
    console.log('Producer is running...')
})