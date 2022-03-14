import amqp from 'amqplib';
import { Request } from '../shared/request.interface';

import { link, queueName } from '../shared/rabbitCredentials';

const sendRabbitMq = async (message:Request): Promise<void> => {
    try {
        const conn = await amqp.connect(link);
        const channel = await conn.createChannel();
        const queue = await channel.assertQueue(queueName);

        await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
        console.log('Producer sent message...');
    }
    catch (err) {
        console.log(err);
    }
}

export { sendRabbitMq };