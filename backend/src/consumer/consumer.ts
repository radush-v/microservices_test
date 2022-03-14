import express from 'express';
import amqp from 'amqplib';

import { link, queueName } from '../shared/rabbitCredentials'

const consumer = express();

const consumeRabbitMq = async (): Promise<void> => {

    try {
        const conn = await amqp.connect(link);
        const channel = await conn.createChannel();
        const queue = await channel.assertQueue(queueName);

        await channel.consume(queueName, message => {
            if (message) {
                console.log(JSON.parse(message.content.toString()));
                channel.ack(message);

                console.log("Consumer received message!")
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export { consumer, consumeRabbitMq };
