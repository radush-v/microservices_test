import { sendRabbitMq } from '../producer/produce';
import { link, queueName } from '../shared/rabbitCredentials';

const amqp = require('amqplib');

describe('Sending with Rabbit MQ', () => {
    test('should pass', async ()=> {

        const message = {
            "fileUrl": "http://url"
        }

        const channel = {
            assertQueue: jest.fn(),
            sendToQueue: jest.fn()
        };

        const conn = {
            createChannel: jest.fn().mockResolvedValueOnce(channel)
        };

        jest.spyOn(amqp, 'connect').mockResolvedValueOnce(conn);

        await sendRabbitMq(message);
        expect(amqp.connect).toBeCalledWith(link);
        expect(conn.createChannel).toBeCalled();
        expect(channel.assertQueue).toBeCalledWith(queueName);
        expect(channel.sendToQueue).toBeCalledWith(queueName, Buffer.from(JSON.stringify(message)));
    });
});