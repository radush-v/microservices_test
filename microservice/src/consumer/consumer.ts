
import amqp from 'amqplib';
import { isMissingDeclaration } from 'typescript';

import { link, queueName } from '../shared/rabbitCredentials'
import { download } from './download';
import { recognizeText } from './getText';

const consumeRabbitMq = async (): Promise<void> => {
    try {
        const conn = await amqp.connect(link);
        const channel = await conn.createChannel();
        await channel.assertQueue(queueName);

        await channel.consume(queueName, message => {
            if (message) {
                const res = JSON.parse(message.content.toString());
                channel.ack(message);

                download(res.fileUrl, 'img.jpg');
                recognizeText('img.jpg');
                console.log("Consumer received message!");
            }
        })
    }
    catch (err) {
        consumeRabbitMq();
    }
}

export { consumeRabbitMq };

// module.exports = consumeRabbitMq;
