const amqp = require('amqplib');
import { consumeRabbitMq } from '../consumer/consumer';
import { link, queueName } from '../shared/rabbitCredentials';

describe('Consuming with Rabbit MQ', () => {
    test('should pass', async () => {

        const message = {
            "fileUrl": "http://url"
        }

        const channel = {
            assertQueue: jest.fn(),
            consume: jest.fn().mockImplementation((callback) => {
                callback(message);
            }),
            ack:jest.fn()
        };

        const conn = {
            createChannel: jest.fn().mockResolvedValueOnce(channel)
        };

        jest.spyOn(amqp, 'connect').mockResolvedValueOnce(conn);

        await consumeRabbitMq();
        expect(amqp.connect).toBeCalledWith(link);
        expect(conn.createChannel).toBeCalled();
        expect(channel.assertQueue).toBeCalledWith(queueName);
        expect(channel.consume).toBeCalledWith(queueName, expect.any(Function));
    });
});