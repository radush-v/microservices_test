const ampqlib = require('amqplib');
const sendRabbitMq = require('./produce');

jest.mock('amqplib');

describe('sendRabbitMq test', () => {
    test('Throw error if we send worng format object', async () => {
        expect(() => sendRabbitMq(5)).toThrowError();
        expect(() => sendRabbitMq([1, 2, 3])).toThrowError();
    })
})