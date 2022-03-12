import express from 'express';
import amqp from 'amqplib';

const producer = express();

const login = process.env.USER;
const password = process.env.PASSWORD;
const port = process.env.CLIENT_PORT

const link = `amqp://${password}:${login}@rabbitmq:${port}`

const sendRabbitMq = async () => {
    try{
        const conn = await amqp.connect(link);
        console.log("Done");
    }
    catch(err){
        console.log(err);
    }
}

producer.post('/send', (_req, res) => {
    sendRabbitMq();
    res.send("Ok")
})

export { producer };