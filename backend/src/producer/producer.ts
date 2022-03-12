import express from 'express';
import amqp from 'amqplib';

const producer = express();

const rabbitMqSettings = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: process.env.RABBITMQ_DEFAULT_USER,
    password: process.env.RABBITMQ_DEFAULT_PASSWORD,
    vhost: '/',
    authMechanism:['PLAIN','AMQPLAIN','EXTERNAL']
}

const sendRabbitMq = async () => {
    try{
        const conn = await amqp.connect(rabbitMqSettings);
        console.log("Done");
        
    }
    catch(err){
        console.log(err);
    }
}

// const sendRabbitMq = () => {
//     amqp.connect('amqp://localhost', function (error0, connection) {
//         if (error0) {
//             throw error0;
//         }
//         connection.createChannel(function (error1, channel) {
//             if (error1) {
//                 throw error1;
//             }
//             var queue = 'hello';
//             var msg = 'Hello world';

//             channel.assertQueue(queue, {
//                 durable: false
//             });

//             channel.sendToQueue(queue, Buffer.from(msg));
//             console.log(" [x] Sent %s", msg);
//         });
//     });
// }

producer.post('/send', (_req, res) => {
    sendRabbitMq();
    res.send("Ok")
})

export { producer };