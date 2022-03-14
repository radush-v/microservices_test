// const ampqlib = require('amqplib');
// const sendRabbitMq = require ('./produce');

// jest.mock('amqplib');

// describe('sendRabbitMq test', () => {
//     const Connection = {
//         createChannel:jest.fn()
//     };

//     const Channel = {
//         assertQueue:jest.fn(),
//         sendToQueue:jest.fn()
//     };

//     const Queue = {};

//     test('Correct value', async () => {
//         const conn = await ampqlib.connect.mockReturnValue(Connection);
//         const channel = await conn.createChannel.mockReturnValue(Channel);
//         const queue = await channel.assertQueue.mockReturnValue(Queue);
//         await channel.sendToQueue.mockReturnValue('');   
        
//         await sendRabbitMq('string');
//         expect()
//     })
// })