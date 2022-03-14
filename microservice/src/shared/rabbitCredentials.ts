const login = process.env.USER;
const password = process.env.PASSWORD;
const port = process.env.CLIENT_PORT;

const link = `amqp://${password}:${login}@rabbitmq:${port}`;
const queueName = "images";

export {link, queueName};