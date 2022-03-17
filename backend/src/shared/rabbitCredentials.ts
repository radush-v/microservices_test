const login = process.env.USER || 'user';
const password = process.env.PASSWORD || 'user';
const port = process.env.CLIENT_PORT || '5672';

const link = `amqp://${password}:${login}@rabbitmq:${port}`;
const queueName = "images";

export {link, queueName};